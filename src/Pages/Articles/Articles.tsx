import React, {useEffect} from "react";
import { notion } from "../../api/NotionClient";


const getPage = async () => {
    const page = await notion.pages.retrieve({ page_id: "d7d16eb5d433436dbaf019a7b912497c" });
    console.log(page)
}

const Articles = () => {

    useEffect(() => {
        getPage()
    }, [])

    return <div>
        Articles
    </div>
}

export default Articles