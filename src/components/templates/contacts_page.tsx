'use client'
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ContactsPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Ini Contacts Page</Heading>
            <Post
                title="Contacts 1 Josafat Pratama Susilo - 2141720031"
                body="081212121" />
            <AllPosts />
        </Section2>
    )
}