type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
    "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
    "input"
) as HTMLInputElement;

if (!text || !input) {
    throw new Error("нет полей");
}

const data = {
    title: ""
};


Object.defineProperty(data, 'title', {
    get: function () {return this.title},
    // set: function (inputValue) {
    //     data.title = inputValue;
    // }
});

input.addEventListener('keyup', (val: Event) => {
    data.title = input.value;
    text.innerHTML = data.title;

})

export default Nullable
