import axios from "axios";

const API_PATH = "https://www.themealdb.com/api/json/v1/1"

export interface RandomMealResultType{
    meals:[
        {
            idMeal:string,
            strMeal:string,
            strCategory:string,
            strArea:string,
            strInstructions:string,
            strMealThumb:string,
            strTags:string,
        }
    ]
}

export async function getRandomMeal() {
    let res = await axios.get(`${API_PATH}/random.php`);
    return res.data as RandomMealResultType;
}

export interface listCategoriesResultType{
    categories:[
        {
            idCategory:string,
            strCategory:string,
            strCategoryThumb:string,
            strCategoryDescription:string,
        }
    ]
}

export async function getListCategories() {
    let res = await axios.get(`${API_PATH}/categories.php`);
    return res.data as listCategoriesResultType;
}

export interface countriesType{
    name:string,
    flagImage:string,
    apiPath:string
}

export const countries : countriesType[] = [
    {
        name:"British",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/gb.png`,
        apiPath:`${API_PATH}/filter.php?a=British`,
    },
    {
        name:"American",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/us.png`,
        apiPath:`${API_PATH}/filter.php?a=American`,
    },
    {
        name:"French",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/fr.png`,
        apiPath:`${API_PATH}/filter.php?a=French`,
    },
    {
        name:"Canadian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/ca.png`,
        apiPath:`${API_PATH}/filter.php?a=Canadian`,
    },
    {
        name:"Jamaican",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/jm.png`,
        apiPath:`${API_PATH}/filter.php?a=Jamaican`,
    },
    {
        name:"Chinese",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/cn.png`,
        apiPath:`${API_PATH}/filter.php?a=Chinese`,
    },
    {
        name:"Dutch",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/nl.png`,
        apiPath:`${API_PATH}/filter.php?a=Dutch`,
    },
    {
        name:"Egyptian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/eg.png`,
        apiPath:`${API_PATH}/filter.php?a=Egyptian`,
    },
    {
        name:"Greek",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/gr.png`,
        apiPath:`${API_PATH}/filter.php?a=Greek`,
    },
    {
        name:"Indian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/in.png`,
        apiPath:`${API_PATH}/filter.php?a=Indian`,
    },
    {
        name:"Irish",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/ie.png`,
        apiPath:`${API_PATH}/filter.php?a=Irish`,
    },
    {
        name:"Italian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/it.png`,
        apiPath:`${API_PATH}/filter.php?a=Italian`,
    },
    {
        name:"Japanese",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/jp.png`,
        apiPath:`${API_PATH}/filter.php?a=Japanese`,
    },
    {
        name:"Kenyan",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/kn.png`,
        apiPath:`${API_PATH}/filter.php?a=Kenyan`,
    },
    {
        name:"Malaysian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/my.png`,
        apiPath:`${API_PATH}/filter.php?a=Malaysian`,
    },
    {
        name:"Mexican",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/mx.png`,
        apiPath:`${API_PATH}/filter.php?a=Mexican`,
    },
    {
        name:"Moroccan",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/ma.png`,
        apiPath:`${API_PATH}/filter.php?a=Moroccan`,
    },
    {
        name:"Croatian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/hr.png`,
        apiPath:`${API_PATH}/filter.php?a=Croatian`,
    },
    {
        name:"Norwegian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/no.png`,
        apiPath:`${API_PATH}/filter.php?a=Norwegian`,
    },
    {
        name:"Portuguese",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/pt.png`,
        apiPath:`${API_PATH}/filter.php?a=Portuguese`,
    },
    {
        name:"Russian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/ru.png`,
        apiPath:`${API_PATH}/filter.php?a=Russian`,
    },
    {
        name:"Argentinian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/ar.png`,
        apiPath:`${API_PATH}/filter.php?a=Argentinian`,
    },
    {
        name:"Spanish",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/es.png`,
        apiPath:`${API_PATH}/filter.php?a=Spanish`,
    },
    {
        name:"Slovakian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/sk.png`,
        apiPath:`${API_PATH}/filter.php?a=Slovakian`,
    },
    {
        name:"Thai",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/th.png`,
        apiPath:`${API_PATH}/filter.php?a=Thai`,
    },
    {
        name:"Saudi Arabian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/sa.png`,
        apiPath:`${API_PATH}/filter.php?a=SaudiArabian`,
    },
    {
        name:"Vietnamese",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/vn.png`,
        apiPath:`${API_PATH}/filter.php?a=Vietnamese`,
    },
    {
        name:"Turkish",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/tr.png`,
        apiPath:`${API_PATH}/filter.php?a=Turkish`,
    },
    {
        name:"Syrian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/sy.png`,
        apiPath:`${API_PATH}/filter.php?a=Syrian`,
    },
    {
        name:"Algerian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/dz.png`,
        apiPath:`${API_PATH}/filter.php?a=Algerian`,
    },
    {
        name:"Tunisian",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/tn.png`,
        apiPath:`${API_PATH}/filter.php?a=Tunisian`,
    },
    {
        name:"Polish",
        flagImage:`https://www.themealdb.com/images/icons/flags/big/64/pl.png`,
        apiPath:`${API_PATH}/filter.php?a=Polish`,
    }   
]

export interface latestMealsReasultType{
    data:{
        meals:[
            {
                idMeal:string,
                strCategory:string,
                strMeal:string,
                strMealThumb:string,
            }
        ]
    }
}

export async function getLatestMeals(){
    let latestMealsNameList = ["Chivito" , "Walnut" , "Fresh" , "Burek" , "Mushroom soup" , "Croatian Bean Stew" , "Traditional Croatian Goulash" , "Croatian lamb peka"];
    let result = await Promise.all(latestMealsNameList.map((name)=>axios.get(`${API_PATH}/search.php?s=${name}`)));
    return result as latestMealsReasultType[];
    

}