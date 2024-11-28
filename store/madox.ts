import { defineStore } from 'pinia';

type ResultType = string[];
type ResultJoker = string[];
type ResultWebSatuType = string[];
type ResultWebDuaType = string[];

export const madoxsStore = defineStore("madoxs", {
    state: () => ({ 
        dataResult: [] as ResultType,
        resultJoker: [] as ResultJoker,
        resultWebSatu: [] as ResultWebSatuType,
        resultWebDua: [] as ResultWebDuaType,
        isGenerate: 'N',
    }),
    actions: {
        async generateNumbers(store_number: any) {
            try {
                const numbers = store_number.split(",").map((num: string) => parseInt(num.trim()));
                const winrate: never[] = [];

                // Ambil digit pertama dan kedua dari 3 angka pertama
                const step1 = numbers.slice(0, 2).flatMap((num: { toString: () => any; }) => {
                    const strNum = num.toString();
                    return [parseInt(strNum[0]), parseInt(strNum[1])];
                });

                // Langkah 2: Gabungkan dengan Winrate dan Hapus Angka yang Sama
                const step2 = [...new Set([...step1, ...winrate])];

                // Langkah 3: Ambil Dua Digit Depan
                const step3 = numbers.map((num: { toString: () => string; }) => {
                    const strNum = num.toString().padStart(4, '0');
                    return strNum.slice(0, 2);
                });

                // Langkah 4: Kalkulasi Joker
                function calculateJoker(num: { toString: () => string; }) {
                    const digits = num.toString().split('').map(Number);
                    const sum = digits.reduce((acc: any, val: any) => acc + val, 0);
                    const joker = sum > 9 ? (sum % 10) + Math.floor(sum / 10) : sum;

                    const firstDigit = digits[0];
                    const secondDigit = digits[1] || 0;

                    const finalFirst = (firstDigit + joker) % 10;
                    const finalSecond = (secondDigit + joker) % 10;

                    return `${finalFirst}${finalSecond}`;
                }

                const step4 = numbers.map((num: any) => calculateJoker(num));

                // Langkah 5: Buat Daftar Angka dari 00 hingga 99 dan Hilangkan yang Sudah Muncul
                const allNumbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));
                const allUsedNumbers = [...step2, ...step3, ...step4].map(String);

                const remainingNumbers = allNumbers.filter(num => !allUsedNumbers.includes(num));

                // Langkah 6: Hilangkan Angka yang Dimulai dengan Digit dari Langkah 2
                const excludedStartDigits = [...new Set(step2)];

                const finalResult = remainingNumbers.filter(num => {
                    const firstDigit = parseInt(num[0]);
                    return !(excludedStartDigits.includes(firstDigit) || (num[0] === '0' && excludedStartDigits.includes(0)));
                });

                // Hilangkan angka twin
                const finalFilteredResult = finalResult.filter(num => num[0] !== num[1]);


                // Urutkan hasil dari terkecil hingga terbesar
                this.dataResult = finalFilteredResult.sort((a, b) => parseInt(a) - parseInt(b));
                this.resultJoker = step4;
                this.resultWebSatu = finalFilteredResult.filter((num: any) => num <= 49);
                this.resultWebDua = finalFilteredResult.filter((num: any) => num > 49);
                this.isGenerate = 'Y'

            } catch (error) {
                console.log(error);
            }
        },
    },
});