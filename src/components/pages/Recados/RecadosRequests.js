import api from "../../../api"

export const loadRecados = () => {
    api.get('/recados/all')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            console.log(res.data)
        }
        else{
            console.log('erro carregar peso',res.data);
        }
    }).catch((err)=>{
        console.log('erro carregar peso',err);
    })
}

