const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  env: {
    endpointMumbai: process.env.ENDPOINT_MUMBAI,
    endpointMainnet: process.env.ENDPOINT_MAINNET,
    projectId: process.env.PROCESS_ID,
    projectSecret: process.env.PROCESS_SECRET,
  },

  //for next/image <Image/>
  images: {
    domains: ["localhost", `${process.env.BASE_URL}`],
  },

  sassOptions: {
    prependData: ` 
    $light: #FEFFFF;
    $dark: #17252a;
    $dark1: #18191a;
    $accent: #FFC947;
    $primary: #233E8B;
    $secondary: #00587A;
    $ternary: #0A1931;
    $txt-light: #F1F1F1;
    $txt-dark: #373D3F;
    $grey: #E7E7DE;
    $light-bg1: #F1F0EB;
    $light-bg2: #38A3A5;
    $danger: #dc3545;
    $success: #28a745;`,
  },
};

module.exports = withPlugins([[withImages]], nextConfig);
