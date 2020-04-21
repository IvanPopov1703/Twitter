/*Лаба №3 про твитер. Попов И.В., 9 группа*/
"use strict"

function messageSplitting(textMess, sizeMess) {
    let count = 0, prev = 0, next;
    let len = String(textMess).length;
    for (let i = 0; i < len; i++)
    {
        next = 0;
        while (next < sizeMess && i < len)
        {
            if (textMess[i] == ' ')
            {
                prev = i;
            }
            i++;
            next++;
        }
        if (i == len)
        {
            count++;
        }
        else
        {
            if (prev != 0 || textMess == ' ')
            {
                if (textMess[i] != ' ')
                {
                    i = prev;
                }
                count++;
                prev = 0;
            }
            else
            {
                return -1;
            }
        }

    }
    return count;
}

let textMessage = prompt("Введите текст сообщения:"); //Текст сообщения
let sizeMessage = prompt("Введите максимальную длину одного сообщения:"); //Максимальная длина

let result = messageSplitting(textMessage, sizeMessage);

if (result == -1)
    alert("Ошибка!");
else
    alert("Число постов = " + result);