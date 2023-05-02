function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal() {
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function createStudent() {
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");
    let text = {
        name: nameInp.value,
        surname: surnameInp.value,
    }
    
    let arr = []
    arr.push(text)
    
    for (let i = 0; i < arr.length; i++) {
        const tbody = document.querySelector("tbody");
        console.log(arr[i].name);
        tbody.innerHTML += `<tr><td>1</td><td>${arr[i].name}</td><td>${arr[i].surname}</td><td><p class="m-0" ind="" >x</p></td></tr>`;
        nameInp.value = "";
        surnameInp.value = "";
        closeModal();
        console.log(arr);
    }
}










// function pushModal() {
//     modal.classList.push(arr[i])
// }
// const tbody = document.querySelector("table tbody");
// tbody.innerHTML += `<tr><td>1</td><td>${nameInp.value}</td><td>${surnameInp.value}</td><td><p class="m-0" ind="" >x</p></td></tr>`;
// nameInp.value = "";
// surnameInp.value = "";
// closeModal();
