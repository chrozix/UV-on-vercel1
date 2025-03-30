self.__uv$config = {
    prefix: '/s/',
    bare:'/b/,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv/uv.handler.js',
    bundle: 'uv/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv/uv.sw.js',
};
