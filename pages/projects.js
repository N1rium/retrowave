import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Head from 'next/head';
import Chip from '@/components/Chip';
import Header from '@/components/Header';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

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
  animation: ${fadeIn} 0.15s linear forwards;
  animation-delay: ${(props) => `0.0${props.index * 2}s`};
  opacity: 0;

  ${(props) =>
    props.bg &&
    css`
      background-image: ${`url(${props.bg})`};
      background-position: center;
      background-size: cover;
    `};

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

  &:hover {
    .title {
      text-decoration: underline;
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
  const [selectedTags, setTags] = useState([]);

  const selectTag = (tag) => {
    const found = selectedTags.find((t) => t === tag);
    const res = found ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag];
    setTags(res);
  };

  const filtered = selectedTags.length
    ? projects.filter((project) => {
        let res = false;
        project.tags.forEach((tag) => {
          console.log(selectedTags.includes(tag));
          if (selectedTags.includes(tag)) res = true;
        });

        return res;
      })
    : projects;

  return (
    <Wrapper>
      <Head>
        <title>Johnny Blomgren - Projects</title>
      </Head>
      <Header />
      <h1 className="text-center font-marker text-6xl my-10">Projects</h1>
      <Chips>
        {tags.map((tag, i) => (
          <Chip key={i} active={selectedTags.includes(tag)} onClick={() => selectTag(tag)}>
            {tag}
          </Chip>
        ))}
      </Chips>
      <div className="text-sm px-2">
        Showing {filtered.length} out of {projects.length} results
      </div>
      <Grid>
        {filtered.map((project, i) => (
          <Project key={`${project.name}_${i}`} index={i} weight={project.weight} bg={project.bg}>
            <div className="title text-2xl font-marker">{project.name}</div>
            <footer>
              {project.tags.map((tag) => (
                <div key={tag} className="text-sm">
                  {tag}
                </div>
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
    {
      name: 'Clipboard Parser',
      weight: 1,
      tags: ['react', 'nextjs', 'styled components', 'front end'],
      bg: '/projects/clipboard-parser-bg.png',
    },
    { name: 'Thief Legacy', weight: 2, tags: ['unity', 'c#', 'game development'] },
    { name: 'Shanes Theft', weight: 1, tags: ['phaser', 'javascript', 'game development', 'socket io'] },
    { name: 'G-NES', weight: 2, tags: ['front end', 'back end', 'javascript', 'socket io', 'nestjs'] },
    { name: 'Timestamp Utils', weight: 1, tags: ['angular', 'express', 'back end'] },
    { name: 'Ortholepsia', weight: 2, tags: ['unity', 'c#', 'game development'] },
    { name: 'jblomgren.com', weight: 2, tags: ['front end', 'nextjs', 'react', 'javascript', 'styled components'] },
    { name: 'CRUD Fiddle', weight: 1, tags: ['react', 'nextjs', 'styled components', 'front end'] },
    { name: 'Chessports', weight: 2, tags: ['front end', 'back end', 'javascript', 'socket io', 'nestjs'] },
    { name: 'Sudoku Smash', weight: 1, tags: ['front end', 'back end', 'javascript', 'nestjs'] },
    { name: 'G-Loot Presentation', weight: 2, tags: ['react', 'front end', 'javascript'] },
  ];

  const tags = [...new Set(projects.reduce((acc, i) => [...acc, ...i.tags], []))];

  return {
    props: {
      projects,
      tags,
    },
  };
}
