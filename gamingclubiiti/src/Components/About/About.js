import React from 'react'
import MemberCard from './MemberCard';


function About(props) {
  return (
    <div className="home-reverse">
      <div className='pt-36'>
        <div className='flex flex-col items-start w-full'>
          <h1 className='uppercase px-24 pb-12 text-gray-300 text-5xl'>Meet the team</h1>
          <div className='container mx-auto my-auto flex flex-wrap flex-col items-center space-y-12'>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/potrait_test.jpg")} BwImg={require("../../static/potrait_test_bw.png")} Name='John Carter' Post='Head of Gaming Club' />
              <MemberCard Imglink={require("../../static/potrait_test_2.jpg")} BwImg={require("../../static/potrait_test_2_bw.png")} Name='Michael carn' Post='FPS Head' />
              <MemberCard Imglink={require("../../static/potrait_test_3.jpg")} BwImg={require("../../static/potrait_test_3_bw.png")} Name='Gary scott' Post='Creative Head' />

            </div>
            <div className='flex flex-row items-center text-center space-x-12'>

              <MemberCard Imglink={require("../../static/potrait_test_3.jpg")} BwImg={require("../../static/potrait_test_3_bw.png")} Name='Gary scott' Post='Creative Head' />
              <MemberCard Imglink={require("../../static/potrait_test_2.jpg")} BwImg={require("../../static/potrait_test_2_bw.png")} Name='Michael carn' Post='FPS Head' />
              <MemberCard Imglink={require("../../static/potrait_test.jpg")} BwImg={require("../../static/potrait_test_bw.png")} Name='John Carter' Post='Head of Gaming Club' />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About