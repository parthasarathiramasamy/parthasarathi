//method to get detail personal data based on id
function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('name').value = value.name
           document.getElementById('fc_date').value = value.fc_date
           document.getElementById('insu_date').value = value.insu_date
           document.getElementById('tax_date').value = value.tax_date
           document.getElementById('polu_date').value = value.polu_date
           document.getElementById('permit_date').value = value.permit_date
        }
    })
}