import React from 'react';
import {indexMapping} from './indexMapping.js'
import { LessonContextConsumer } from '../../../contexts/LessonContext'
import { Link } from 'nr1'
import LEVELS from '../../../levels'

export default function RefIndex() {


  return (
    <LessonContextConsumer>
    {context => {
      indexMapping.sort((a, b) => (a.op > b.op) ? 1 : -1) //sort the ops first
      let items = indexMapping.map((item)=>{

        let refs=item.refs.map((ref,idx)=>{
          let refTitle=`${LEVELS[ref.level-1].level}: ${LEVELS[ref.level-1].lessons[ref.lesson-1].title}`
          return  <div className="refLink"><Link onClick={()=>{context.chooseLesson(ref.level-1,ref.lesson-1)}}>{refTitle}</Link></div>
        })
        return   <tr className="unstyledTr">
            <td className="hdrCol"><code>{item.op}</code></td>
            <td >{refs}</td>
        </tr>

      })

      return <div>
        <p>Quicly find lessons refering to NRQL functions, operators and keywords.</p>
        <table className="indexTable u-unstyledTable">
          <tbody>
            {items}
          </tbody>
        </table>
      </div>

    }}
    </LessonContextConsumer>
    
  );
}
