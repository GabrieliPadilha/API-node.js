const env =  process.env.NODE_ENV || 'dev';

const config  = () => {
    switch(env) {
        case 'dev':
            return {
                db_string: 'mongodb+srv://usuario_admin:88450406@clusterapi.sremv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha123',
                jwt_expires: '7d'
            }

        case 'hml':
            return {
                db_string: 'mongodb+srv://usuario_admin:88450406@clusterapi.sremv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha123',
                jwt_expires: '7d'
            }
        
        case 'prod':
            return {
                db_string: 'mongodb+srv://usuario_admin:88450406@clusterapi.sremv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha123',
                jwt_expires: '7d'
            }
    }
}
console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`)

module.exports = config()