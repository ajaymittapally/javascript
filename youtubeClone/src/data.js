export const API_KEY= 'AIzaSyDEX2zJuqXHQY7bK_jDL4udel1_FzS5y8c';
export  function value_converter(value){
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >= 1000){
        return Math.floor(value/1000)+"k";
    }else{
        return value;
    }
}