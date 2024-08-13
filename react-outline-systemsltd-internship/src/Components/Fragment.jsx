import React from "react";
import PostList from "./apitesting/useeffect_api";
import Parent from "./tasks/parent-child-components/parentcomp";
import Form from "./form&controlled";

function Title()
{
    return (
        <h2>Hello World</h2>
    )
}

function Paragraph()
{
    return (
        <p>
            This is a paragraph. <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum turpis sit amet neque consequat, 
            quis cursus lorem tristique. Etiam mollis pellentesque tellus sit amet iaculis. Morbi euismod fringilla nunc, 
            sit amet tristique dolor condimentum et. Integer vel erat et mi auctor congue. Aliquam ornare neque magna. 
            Integer lacinia, dui sed rutrum pretium, nisi leo facilisis quam, eu commodo lectus nibh non nibh. 
            Suspendisse nec cursus dui.
        </p>
    )
}

export default function FragmentComp()
{
    return (
        <>
            {/* <Title /> */}
            {/* <Paragraph /> */}

            <PostList />
            {/* <Parent /> */}
            {/* <Form /> */}
        </>
    )
}