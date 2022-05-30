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

export interface allNationTypeResult{
    meals:[
        {
            strArea:string
        }
    ]
}

export async function getAllNation(){
    let result = await axios.get(`${API_PATH}/list.php?a=list`);
    return result.data as allNationTypeResult;
}

export interface mealsByNationType{
    idMeal:string,
    strMeal:string,
    strMealThumb:string
}
export interface mealsByNationTypeResult{
    meals:[
        mealsByNationType
    ]
}

export async function getMealsByNation(nation:string) {
    let result = await axios.get(`${API_PATH}/filter.php?a=${nation}`);
    return result.data as mealsByNationTypeResult;
    
}

export interface getMealByIdResultType{
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

export async function getMealById(id:string) {
    let result = await axios.get(`${API_PATH}/lookup.php?i=${id}`);
    return result.data as getMealByIdResultType;
}

export interface recommendNationalMealsType{
    idMeal:string,
    strMeal:string,
    strMealThumb:string,
    strCategory:string,
    strArea:string,
}

export async function getRecommendNationalMeals() {
    let nationList = await getAllNation();
    let allNationMealsResult = await Promise.all(nationList.meals.map((nation)=> getMealsByNation(nation.strArea))) as mealsByNationTypeResult[];
    let recommendNationMealsList = [] as recommendNationalMealsType[];
    for(let index = 0 ; index < allNationMealsResult.length ; index++){
        for(let i = 0 ; i < allNationMealsResult[index].meals.length ; i++){
            if(
            (index === 0 && allNationMealsResult[index].meals[i].strMeal === 'Big Mac')
            ||(index === 1 && allNationMealsResult[index].meals[i].strMeal === 'Turkey Meatloaf')
            ||(index === 2 && allNationMealsResult[index].meals[i].strMeal === 'Tourtiere')
            ||(index === 3 && allNationMealsResult[index].meals[i].strMeal === 'Wontons')
            ||(index === 4 && allNationMealsResult[index].meals[i].strMeal === 'Croatian Bean Stew')
            ||(index === 5 && allNationMealsResult[index].meals[i].strMeal === 'Stamppot')
            ||(index === 6 && allNationMealsResult[index].meals[i].strMeal === 'Shawarma')
            ||(index === 7 && allNationMealsResult[index].meals[i].strMeal === 'Brie wrapped in prosciutto & brioche')
            ||(index === 8 && allNationMealsResult[index].meals[i].strMeal === 'Garides Saganaki')
            ||(index === 9 && allNationMealsResult[index].meals[i].strMeal === 'Matar Paneer')
            ||(index === 10 && allNationMealsResult[index].meals[i].strMeal === 'Corned Beef and Cabbage')
            ||(index === 11 && allNationMealsResult[index].meals[i].strMeal === 'Vegan Lasagna')
            ||(index === 12 && allNationMealsResult[index].meals[i].strMeal === 'Escovitch Fish')
            ||(index === 13 && allNationMealsResult[index].meals[i].strMeal === 'Honey Teriyaki Salmon')
            ||(index === 14 && allNationMealsResult[index].meals[i].strMeal === 'Mbuzi Choma (Roasted Goat)')
            ||(index === 15 && allNationMealsResult[index].meals[i].strMeal === 'Mee goreng mamak')
            ||(index === 16 && allNationMealsResult[index].meals[i].strMeal === 'Chickpea Fajitas')
            ||(index === 17 && allNationMealsResult[index].meals[i].strMeal === 'Lamb Tagine')
            ||(index === 18 && allNationMealsResult[index].meals[i].strMeal === 'Bigos (Hunters Stew)')
            ||(index === 19 && allNationMealsResult[index].meals[i].strMeal === 'Portuguese prego with green piri-piri')
            ||(index === 20 && allNationMealsResult[index].meals[i].strMeal === 'Beef stroganoff')
            ||(index === 21 && allNationMealsResult[index].meals[i].strMeal === 'Spanish Tortilla')
            ||(index === 22 && allNationMealsResult[index].meals[i].strMeal === 'Thai Green Curry')
            ||(index === 23 && allNationMealsResult[index].meals[i].strMeal === 'Tuna and Egg Briks')
            ||(index === 24 && allNationMealsResult[index].meals[i].strMeal === 'Corba')
            ||(index === 26 && allNationMealsResult[index].meals[i].strMeal === 'Vietnamese Grilled Pork (bun-thit-nuong)')
            ){
                let mealData = await getMealById(allNationMealsResult[index].meals[i].idMeal);
                let recommendNationMeals = {} as recommendNationalMealsType;
                recommendNationMeals.idMeal = allNationMealsResult[index].meals[i].idMeal;
                recommendNationMeals.strMeal = allNationMealsResult[index].meals[i].strMeal;
                recommendNationMeals.strMealThumb = allNationMealsResult[index].meals[i].strMealThumb;
                recommendNationMeals.strCategory = mealData.meals[0].strCategory;
                recommendNationMeals.strArea = mealData.meals[0].strArea;
                recommendNationMealsList.push(recommendNationMeals);
            }

        }
    }
    return recommendNationMealsList;
    
    
}