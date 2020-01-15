const environments={
    development:{
        mysql:{
            username:'root',
            password:'kaillika01!',
            database:'node_api_codelab_dev'
        }
    },
    test:{
        mysql:{
            username:'root',
            password:'kaillika01!',
            database:'node_api_codelab_dev'
        }
    },
    production:{

    }
}

const nodeEnv=process.env.NODE_ENV || 'development';

module.exports=environments[nodeEnv];