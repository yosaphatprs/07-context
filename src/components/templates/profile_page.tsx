'use client'
import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ProfilePage() {
    return (
        <Section2 isFancy={true}>
            <Heading>Profil Saya</Heading>
            <Post
                title="Hello Traveller!"
                body="Nama saya Josafat Pratama Susilo dengan NIM 2141720031" />
            <AllPosts />
        </Section2>
    )
}