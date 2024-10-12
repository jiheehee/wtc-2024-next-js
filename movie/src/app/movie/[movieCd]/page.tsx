type Props = {
    params: {
        movieCd: string;
    }
}

export default async function Page({params: {movieCd}}:Props) {
    const key = '3801c7437930ca3e5a37fd86b59383ea';
    const baseUrl = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
    const url = `${baseUrl}?key=${key}&movieCd=${movieCd}`;
    const response = await fetch( url );
    const json: ResponseType = await response.json();
    return <>
        영화 정보 : {movieCd}
    
        <pre><code>{JSON.stringify(json, null, 2)}</code></pre>
    </>
}

type ResponseType = {
    movieInfoResult: {
        movieInfo: {
            movieCd: string,
            movieNm: string,
            movieNmEn: string,
            movieNmOg: string,
            showTm: string,
            prdtYear: string,
            openDt: string,
            prdtStatNm: string,
            typeNm: string,
        },
        nations: NationType[],
        genres: ({ genreNm: string })[],
        directors: ({
            "peopleNm": string,
            "peopleNmEn": string,
        })[],
        actors: ({
            "peopleNm": string,
            "peopleNmEn": string,
            "cast": string,
            "castEn": string,
        })[],
        showTypes: ({
            "showTypeGroupNm": string,
            "showTypeNm": string,
        })[],
        companys: ({
            "companyCd": string,
            "companyNm": string,
            "companyNmEn": string,
            "companyPartNm": string,
        })[],
        audits: ({
            "auditNo": string,
            "watchGradeNm": string
        })[],
        staffs: ({
            "peopleNm": string,
            "peopleNmEn": string,
            "staffRoleNm": string,
        })[]
    }
}

type NationType = {
    nationNm: string;
}