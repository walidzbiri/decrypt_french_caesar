alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
'w', 'x', 'y', 'z' ];

const frequences=(txt_crypte)=>{
    let tab=[];
    for(let i=0;i<26;i++){
        tab[i]=0;
        for(let j=0;j<txt_crypte.length;j++){
            if(txt_crypte[j]==alphabet[i]){
                tab[i]++;
            }
        }
    }
    return tab;
}

const clefs=(txt_crypte)=>{
    let index=0;
    let tab=frequences(txt_crypte);
    for(let i=1;i<26;i++){
        if(tab[i]>tab[index]){
            index=i;
        }
    }
    return index-4;// la valeur de décalage
}

const decodageAuto=(txt_crypte)=>{
    let txt_decrypt=[];
    let num=[];
    const decalage=clefs(txt_crypte);
    let position=0;
    for(let i=0;i<txt_crypte.length;i++){
        for(let j=0;j<alphabet.length;j++){
            if(txt_crypte[i]==alphabet[j]){
                position=j;
                num[i]=position-decalage;
                if(num[i]<0){
                    num[i]+=26;
                }
            }
        }
        txt_decrypt[i]=alphabet[num[i]];
    }
    return txt_decrypt;
}

// let's test it
let msgOrigine=decodageAuto("cvbzhclgylbzzpslawjyfwavnyhwopl").join("");
console.log(msgOrigine);
