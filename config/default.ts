export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHKZNssVnLs/nPcPpzxVY4rvondZ
    y0imYH0txHuyP4mvGfpUHuqRFH4LZjH24ib4weeiPieuyY7cnn7Mc5l2oaatsa/k
    yw0hujvYI98M1IpYbFChCkFB6T9nm9we+rTzF+8vBOST21FtNzmL0TjR12yvTx0i
    XUjyDlqMEayDxRQtAgMBAAE=
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICWwIBAAKBgHKZNssVnLs/nPcPpzxVY4rvondZy0imYH0txHuyP4mvGfpUHuqR
    FH4LZjH24ib4weeiPieuyY7cnn7Mc5l2oaatsa/kyw0hujvYI98M1IpYbFChCkFB
    6T9nm9we+rTzF+8vBOST21FtNzmL0TjR12yvTx0iXUjyDlqMEayDxRQtAgMBAAEC
    gYASkflrF2l6fmh1MLgs8rlavlJZfNeQQkXIgy4fzVa2fQV8pz0LTc9ATaCV4Cft
    oMnrO0NPMue+msmkSoVBDRRMsGLq9MG1qxvDek3MoaMcRnM67AtsWVzNd8OR7iaV
    2hCyv7JzoVimZVXc24t1JaM7J9Q/YBBTkgTOHPVOoc7GAQJBAOT46vNcz4EsUIyB
    GgOn7ttmdCiGXKymNkBiFjnT4d8GuUxjQCKoC/u2r0tA1jwEoSamOapBWlMd2HFE
    bjFWCeECQQCAICY9lnySJyriT/gOe9Ht2S9Qij9MDMdIkAedBAQkNGKE4WS2U/bo
    ev27TSmS00IPFg6ondI3X5VACNeOwovNAkB+1qTQSwlntPSp4JpYjB50yzxtdoC/
    4xMKd0t4nTbyJPdgqVpN2GlK9tgEB9alSKs8jbhD6A/xGwdbN10TV2YBAkAjKi+0
    qY/JASz47h/TwdINKJWe0kKrGbq8RKOCSa7lTOdZNw9QJ11V0yO+e2AUpxyzTUd6
    qc4fWoF5ELQwv15lAkEAmhc3ofwHqRy9F6iBfTmNIWvpuAAjUBA84MIItqWnplV2
    5n+6ZwlGhtXK+zY2FKpm3EE4x7LUB5BGTgRMwsxyCw==
    -----END RSA PRIVATE KEY-----`,
}