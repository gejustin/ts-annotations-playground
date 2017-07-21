import * as ts from 'typescript';
import { ObjectMapper, JsonProperty as Prop } from 'ts-annotations';
import { tsconfig } from './tsconfig';

self.onmessage = function(e) {
    self['objectMapper'] = new ObjectMapper();
    self['JsonProperty'] = Prop;
    self['exports'] = {};
    const data = e.data.split('||');
    self['json'] = JSON.parse(data[0]);
    self['srcClass'] = eval(ts.transpile(data[1], tsconfig.compilerOptions));
    
    const source = 'objectMapper.readValue(json, srcClass);';
    const mapped = eval(source);
    postMessage(JSON.stringify(mapped));
};
