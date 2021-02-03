class ApodModel{

    
    constructor(){

        this.xhr = new XMLHttpRequest();
        this.objNasa;

    }


    novoXHR(data){
        this.xhr.open('GET', `https://api.nasa.gov/planetary/apod?api_key=mBumZNaa8dD44NvyNYydeU1DQ6FlWT6Ke1raCr2n&date=${data}`, false);

        this.xhr.addEventListener('load', () => {

            this.objNasa = JSON.parse(this.xhr.responseText);
        });
        
        this.xhr.send();
    }

    get obj(){
        return this.objNasa
    }

}