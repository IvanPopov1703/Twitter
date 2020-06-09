/*Лаба №3 про твитер. Попов И.В., 9 группа*/
"use strict"

//Функция для объединения элементов массива
function len(arrWords) {
    return arrWords.join(' ').length;
}

function messageSplitting(textMess, sizeMess) {
    //Объединяем строку в массив, разбивая по пробелам
    let arrWords = textMess.split(' ');
    let msg = [], msgs = [];
    let errFlag = 0;

    msgs = arrWords.reduce((messages, word) => {
        if ((errFlag == 0) && (word != "")) {
            if (word.length > sizeMess) {
                errFlag = -1;
                return [];
            }
            let newmsg = msg.concat([word]);
            if (len(newmsg) <= sizeMess) {
                msg = newmsg;
            } else {
                messages.push(msg.join(' '));
                msg = [word];
            }
        }
        return messages;
    }, []);

    if (errFlag != 0)
        return errFlag;

    msgs.push(msg.join(' '));
    return msgs;
}


let textMessage = prompt("Введите текст сообщения:"); //Текст сообщения
let sizeMessage = prompt("Введите максимальную длину одного сообщения:"); //Максимальная длина

let result = messageSplitting(textMessage, sizeMessage);

if (result == -1) {
    alert("Ошибка!");
} else {
    //Вывод в консоль
    for (let s of result) {
        console.log(s + "\n\n");
    }
    alert("Число постов = " + result.length);
}
