'use client'
import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading >Josafat Pratama Susilo - 2141720031</Heading>
            <Section>
                <Heading >Heading</Heading>
                <Heading >Heading</Heading>
                <Heading >Heading</Heading>
                <Section>
                    <Heading >Sub-heading</Heading>
                    <Heading >Sub-heading</Heading>
                    <Heading >Sub-heading</Heading>
                    <Section>
                        <Heading >Sub-sub-heading</Heading>
                        <Heading >Sub-sub-heading</Heading>
                        <Heading >Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}