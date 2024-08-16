//for any string frist Letter Capitalize
export const fristLetterCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


//GMT time to local Time converter
export const timeCoverterGMTtoLocal = (GMTtime) => {
    let localTime = new Date(GMTtime).toLocaleString();
    return localTime; 
}