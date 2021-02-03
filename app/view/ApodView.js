class ApodView{

    
    constructor(obj){
        
        this.elementUpdate = $('[data-updateApod]');
        this.obj = obj
        
    }



    updateView(){

        return this.elementUpdate.innerHTML = `
            <div class="images">
                <img src="${this.obj.url}">
                <a href="${this.obj.url}" target="_blank">Download image</a>
            </div>

            <div class="content-text">
                <h1>${this.obj.title}</h1>
                <p>${this.obj.explanation}</p>
            </div>
        `
        
    }
        
}