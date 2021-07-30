import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Chip from '@/components/Chip';

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 0.5rem;
  grid-gap: 0.5rem;
  grid-auto-flow: dense;
`;

const Project = styled.div`
  position: relative;
  height: 300px;
  grid-column: ${(props) => `span ${props.weight} / auto`};
  background: #212121;

  .title {
    position: absolute;
    top: 1rem;
    left: 1rem;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.75);
  }

  footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    overflow: auto;
    white-space: nowrap;
    padding: 0.5rem 1rem;

    & > * {
      display: inline-block;
      &:not(:first-child) {
        margin-left: 1rem;
      }
    }
  }
`;

const Chips = styled.div.attrs({ className: 'flex items-center justify-center' })`
  max-width: 640px;
  flex-wrap: wrap;
  margin: 2rem auto;

  & > * {
    margin: 0.25rem;
  }
`;

export default function Projects({ projects, tags }) {
  const [visible, setVisible] = useState(projects);
  const [selectedTags, setTags] = useState([]);

  return (
    <Wrapper>
      <Head>
        <title>Johnny Blomgren - Projects</title>
      </Head>
      <h1 className="text-center font-marker text-6xl my-10 text-shadow-pulse">Projects</h1>
      <Chips>
        {tags.map((tag, i) => (
          <Chip key={i}>{tag}</Chip>
        ))}
      </Chips>
      <div className="text-sm px-2">
        Showing {visible.length} out of {projects.length} results
      </div>
      <Grid>
        {visible.map((project) => (
          <Project key={project.name} weight={project.weight}>
            <div className="title text-2xl font-marker">{project.name}</div>
            <footer>
              {project.tags.map((tag, i) => (
                <div className="text-sm">{tag}</div>
              ))}
            </footer>
          </Project>
        ))}
      </Grid>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const projects = [
    { name: 'JSON Fiddle', weight: 1, tags: ['angular', 'css', 'front end'] },
    { name: 'Clipboard Parser', weight: 1, tags: ['react', 'nextjs', 'styled components', 'front end'] },
    { name: 'Thief Legacy', weight: 2, tags: ['unity', 'c#', 'game development'] },
    { name: 'Shanes Theft', weight: 1, tags: ['phaser', 'javascript', 'game development', 'socket io'] },
    { name: 'G-NES', weight: 2, tags: ['front end', 'javascript', 'socket io', 'nestjs'] },
    { name: 'Timestamp Utils', weight: 1, tags: ['angular', 'express'] },
    { name: 'Ortholepsia', weight: 2, tags: ['unity', 'c#', 'game development'] },
    { name: 'CRUD Fiddle', weight: 1, tags: ['react', 'nextjs', 'styled components', 'front end'] },
    { name: 'Chessports', weight: 2, tags: ['front end', 'javascript', 'socket io', 'nestjs'] },
  ];

  const tags = [...new Set(projects.reduce((acc, i) => [...acc, ...i.tags], []))];

  return {
    props: {
      projects,
      tags,
    },
  };
}
