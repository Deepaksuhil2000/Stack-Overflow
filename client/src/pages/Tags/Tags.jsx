import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions regarding programming in ECMAScipt (Javascript/JS) and its various dialects/implement"
    },{
        id:2,
        tagName: "python",
        tagDesc: `Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language.`
    },{
        id:3,
        tagName: 'c#',
        tagDesc: "C# can be used to create a number of different programs and applications: mobile apps, desktop apps, cloud-based services, websites, enterprise software and games."
    },{
        id:4,
        tagName: 'java',
        tagDesc: `Java has long been the de-facto programming language for creating Web apps, Android apps, and software development tools such as Eclipse, IntelliJ IDEA, and NetBeans IDE.`
    },{
        id:5,
        tagName: 'php',
        tagDesc: `PHP (Hypertext Preprocessor) is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites. It was among the first server-side languages that could be embedded into HTML`
    },{
        id:6,
        tagName: 'html',
        tagDesc: `HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc.`
    },{
        id:7,
        tagName: 'Android',
        tagDesc: `Android OS is a Linux-based mobile operating system that primarily runs on smartphones and tablets.`
    }, {
        id:8,
        tagName: 'css',
        tagDesc: `CSS, or “Cascading Style Sheets,” is used for styling and laying out webpages. It can be used to adjust content size, spacing, color and font or add decorative features, such as animations or split content into columns.`
    },{
        id:9,
        tagName: 'ReactJs',
        tagDesc: `React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps`
    },{
        id:10,
        tagName: 'nodeJs',
        tagDesc: `Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.`
    }]


  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-conatainer-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that catagorizes your question with others, similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                   <TagsList tag={tag} key={tagsList.id}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
