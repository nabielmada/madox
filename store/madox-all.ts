import { defineStore } from 'pinia';

type ResultType = string[];
type ResultJoker = string[];
type ResultWebSatuType = string[];
type ResultWebDuaType = string[];

export const madoxsStore = defineStore("madoxs", {
    state: () => ({ 
        dataResult: [] as ResultType,
        resultWebSatu: [] as ResultWebSatuType,
        resultWebDua: [] as ResultWebDuaType,
        isGenerate: 'N',
    }),
    actions: {
        async generateNumbers(store_number: any) {
            try {
                // MRX1
                // const numbers = store_number.split(",").map((num: string) => parseInt(num.trim()));

                // //  Ambil Dua Digit Depan
                // const step1 = numbers.slice(0, -1).map((num: { toString: () => string; }) => {
                //     const strNum = num.toString().padStart(4, '0');
                //     return strNum.slice(0, 2);
                // });

                // console.log(step1);

                // // Ambil digit pertama dari 3 angka pertama
                // const step2 = numbers.slice(0, 3).map((num: number) => {
                //     const strNum = num.toString().padStart(4, '0');;
                //     return parseInt(strNum[0]);
                // });

                // console.log(step2);

                // // Ambil digit kedua dari 3 angka pertama
                // const step3 = numbers.slice(0, 3).map((num: number) => {
                //     const strNum = num.toString().padStart(4, '0');;
                //     return parseInt(strNum[1]);
                // });

                // console.log(step3);

                // // Buat Daftar Angka dari 00 hingga 99 dan Hilangkan yang Sudah Muncul
                // const allNumbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));
                // const allUsedNumbers = [...step1].map(String);

                // const remainingNumbers = allNumbers.filter(num => !allUsedNumbers.includes(num));

                // // Ambil Digit yang Akan Dihilangkan
                // const excludedStartDigits = new Set(step2);
                // const excludedEndDigits = new Set(step3);

                // // Filter Remaining Numbers
                // const finalFilteredResult = remainingNumbers.filter(num => {
                //     const firstDigit = parseInt(num[0]);
                //     const endDigit = parseInt(num[1]);

                //     // Cek apakah angka adalah twin
                //     const isTwin = firstDigit === endDigit;

                //     // Cek apakah angka harus dikecualikan
                //     const isExcluded = excludedStartDigits.has(firstDigit) || excludedEndDigits.has(endDigit);

                //     return !isTwin && !isExcluded; // Hanya ambil angka yang bukan twin dan tidak dikecualikan
                // });

                // MRX2
                const numbers = store_number.split(",").map((num: string) => parseInt(num.trim()));
                const fixAS = 0
                const customAS = 9

                //  Ambil Dua Digit Depan
                const step1 = numbers.slice(0, -1).map((num: { toString: () => string; }) => {
                    const strNum = num.toString().padStart(4, '0');
                    return strNum.slice(0, 2);
                });

                console.log(step1);

                // Ambil digit pertama dari 1 angka pertama
                const step2 = numbers.slice(0, 1).map((num: number) => {
                    const strNum = num.toString().padStart(4, '0');
                    return parseInt(strNum[0]);
                });

                console.log(step2);

                // Ambil digit pertama dari 1 angka pertama
                const step3 = numbers.slice(0, 1).map((num: number) => {
                    const strNum = num.toString().padStart(4, '0');
                    return parseInt(strNum[1]);
                });

                console.log(step3);

                // Buat Daftar Angka dari 00 hingga 99 dan Hilangkan yang Sudah Muncul
                const allNumbers = Array.from({ length: 100 }, (_, i) => i.toString().padStart(2, '0'));
                const allUsedNumbers = [...step1].map(String);

                const remainingNumbers = allNumbers.filter(num => !allUsedNumbers.includes(num));

                // Ambil Digit yang Akan Dihilangkan
                const excludedStartDigits = new Set([...step2, fixAS]);
                const excludedEndDigits = new Set([...step3, customAS]);

                // Filter Remaining Numbers
                const finalFilteredResult = remainingNumbers.filter(num => {
                    const firstDigit = parseInt(num[0]);
                    const endDigit = parseInt(num[1]);

                    // Cek apakah angka adalah twin
                    const isTwin = firstDigit === endDigit;

                    // Cek apakah angka harus dikecualikan
                    const isExcluded = excludedStartDigits.has(firstDigit) || excludedEndDigits.has(endDigit);

                    return !isTwin && !isExcluded; // Hanya ambil angka yang bukan twin dan tidak dikecualikan
                });

                // Pisahkan Hasil
                this.dataResult = finalFilteredResult.sort((a, b) => parseInt(a) - parseInt(b));
                this.resultWebSatu = finalFilteredResult.filter(num => parseInt(num) <= 49);
                this.resultWebDua = finalFilteredResult.filter(num => parseInt(num) > 49);
                this.isGenerate = 'Y';

            } catch (error) {
                console.log(error);
            }
        },
    },
});