import { CompilerOptions, ModuleKind, ModuleResolutionKind, ScriptTarget, ParseConfigHost } from 'typescript';

export const tsconfig = {
    compilerOptions: {
        target: ScriptTarget.ES5,
        module: ModuleKind.None,
        moduleResolution: ModuleResolutionKind.NodeJs,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: true,
        noImplicitAny: false,
        sourceMap: true,
    },
};