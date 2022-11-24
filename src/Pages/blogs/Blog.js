import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto w-3/4 text-justify'>
            <h2 className='text-xl text-blue-600'>Question: 1. What are the different ways to manage a state in a React application?</h2>
            <p>Ans: React state management is a process for managing the data that React components need in order to render themselves.
                There are four main types of state you need to properly manage in your React apps:

                1. Local state:  Local state is data we manage in one or another component.
                Local state is most often managed in React using the useState hook.

                2. Global state: Global state is data we manage across multiple components.
                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                3. Server state: Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of local and global UI state.

                There are several pieces of state that must be managed every time to fetch
                or update data from an external server, including loading and error state.



                4. URL state: Data that exists on URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of application rely upon accessing URL state.
            </p>

            <h2 className='text-xl text-blue-600'>Question: 2. How does prototypical inheritance work?</h2>

                <p>
                    Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                </p>


            <h2 className='text-xl text-blue-600'>Question:.3 What is a unit test? Why should we write unit tests?</h2>

            <p>
                Ans: Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.

                we should write unit tests because, Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
            </p>


            <h2 className='text-xl text-blue-600'>Question: 4. Difference among React vs. Angular vs. Vue? ?</h2>

            <p> Ans:
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Angular JS</th>
                                <th>React JS</th>
                                <th>Vue JS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Developed By</th>
                                <td>Goggle</td>
                                <td>Facebook</td>
                                <td>Evan-You (ex-Google)</td>
                            </tr>
                           
                            <tr className="active">
                                <th>Community</th>
                                <td>Large Community as it is the oldest. Code <br />
                                 share among community is secured as <br />
                                 it is provided by google developers</td>
                                <td>Facebook developers are apart of this <br /> 
                                community so rest assured, will alawys
                                <br /> have a dependable community to fall back on.</td>
                                <td>Growing Community. The communityy mostly    <br />
                                 comprises of open-source contributors
                                 <br /> and frelancers as it has not been 
                                 
                                    developed by anyb texh giant. </td>
                            </tr>
                        
                            <tr>
                                <th>Job Market</th>
                                <td>5000-8000 Angular developers jobs available on LinkedIn</td>
                                <td>Around 8000  React JS jobs available on LinkedIn</td>
                                <td>Less than 3000  Vue JS jobs available on LinkedIn</td>
                            </tr>
                            <tr>
                                <th>Use Cases</th>
                                <td>Large scale apps, Real-time apps,</td>
                                <td>cross-platform apps, quick development and deployment</td>
                                <td>Apps targeting early market entry, lightweight apps</td>
                            </tr>
                            <tr>
                                <th>Cons</th>
                                <td>Difficulty </td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </p>
        </div>
    );
};

export default Blog;