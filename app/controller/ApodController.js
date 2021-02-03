class ApodController{


    constructor(){

        this.inputDate = $('#date');

        this.apodModel = new ApodModel();
        this.apodModel.novoXHR(this.inputDate.value);
        
        this.update();

    }


    requestApod(event){
        event.preventDefault();
        this.apodModel.novoXHR(this.inputDate.value);
        this.update();
    }


    update(){
        this.apodView = new ApodView(this.apodModel.obj);
        this.apodView.updateView();
    }


}