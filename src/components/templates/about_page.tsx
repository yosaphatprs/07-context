'use client'
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function AboutPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Ini About Page</Heading>
            <Post
                title="About Josafat Pratama Susilo - 2141720031"
                body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, amet!" />
            <AllPosts />
        </Section2>
    )
}
