import React from "react";
import Section from "./Section";
import Heading from "./Heading";

export default function Page() {
  return (
    <Section>
      <Heading>大标题</Heading>
      <Section>
        <Heading>一级标题</Heading>
        <Heading>一级标题</Heading>
        <Heading>一级标题</Heading>
        <Section>
          <Heading>二级标题</Heading>
          <Heading>二级标题</Heading>
          <Heading>二级标题</Heading>
        </Section>
      </Section>
    </Section>
  );
}
