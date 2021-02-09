import React, { Component } from 'react';
import styles from './index.module.less';

class Resume extends Component {
    render(props) {  
    const R = props.R
    const company1 = R?.company[0].project
    const company2 = R?.company[1]?.project
    
    return (
        <>
        <div className={styles.resumeWrap}>
          <div className={styles.resumeLeft}>
            <div className={styles.avatarWrap}>
              <img className={styles.avatar} src={R.avatar} /> 
              <div className={styles.name}>南宫半夏</div>
              <div className={styles.position}>{R.position}<span className={styles.workExperience}> ({R.workExperience}年经验)</span></div>
            </div>
            
            <div className={styles.personalInfo}> 
              <div className={styles.title}>基本信息</div>
              <div className={styles.line}></div>
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe60d;</i>
                <span>{R.city}</span>
              </div>
  
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe610;</i>
                <span>{R.university}<span className={styles.year}>({R.universityYear})</span></span>
              </div>
  
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe607;</i>
                <span>{R.birthday}</span>
              </div>
  
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe611;</i>
                <span>{R.major}</span>
              </div>
              
              <div className={styles.interspace}></div>
  
              <div className={styles.title}>联系方式</div>
              <div className={styles.line}></div>
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe776;</i>
                <span>{R.contact}</span>
              </div>
  
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe604;</i>
                <a href={'mailto:'+R.mail}><span>{R.mail}</span></a>
              </div>
  
              <div className={styles.infoDetail}>
                <i className="iconfont">&#xe8fd;</i>
                <span style={{cursor:'pointer'}}
                  onClick={()=>{
                    window.open('http://'+R.github)
                  }}>{R.github}</span>
              </div>
            </div>
          </div>
          <div className={styles.resumeRight}>
            <div>
              <div className={styles.title}><i className="iconfont">&#xe67c;</i>工作经验/Work Experience</div>
              <div className={styles.company}>{ R.company[0].name } <span className={styles.time}> {R.company[0].year} </span> </div> 
              
              <div className={styles.companyDesc}>
                { 
                  company1.map((item,index)=>(
                    <div className={styles.projectItem} key={index}><span className={styles.round}></span><span className={styles.bold}>《{item.name}》</span>—&nbsp;{item.desc} </div>
                  ))
                }
              </div>
  
              <div className={styles.blankLine}> </div>
              {
                company1.map((item,index)=>(
                  <div key={index}>
                    <div className={styles.companyDesc}>
                      <div className={styles.subContent}><span className={styles.diamond}></span><span className={styles.bold}>《{item.name}》</span>——&nbsp;{item.detailDesc} </div>
                    </div>
  
                    <div className={styles.blankLine2}></div>
  
                    <div className={styles.companyDesc}>
                      <div className={styles.subContent}>项目架构:{item.struct}</div>
                    </div>
                    
                    <div style={{paddingLeft:'10px'}}>
                      <div className={styles.companyDesc}>
                        { item.highlights.map((item,index) => <div className={styles.subContent2} key={index}><span className={styles.round2}></span>{item}</div>)}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {
          company2 &&<div className={styles.resumeWrap2}>
          <div className={styles.twoWrap}>
            <div className={styles.twoWrap2}> 
              <div className={styles.title}><i className="iconfont">&#xe67c;</i>工作经验/Work Experience</div>
              <div className={styles.company}>{ R.company[1].name } <span className={styles.time}> {R.company[1].year} </span> </div> 
              <div className={styles.companyDesc}>
                { 
                  company2.map((item,index)=>(
                    <div className={styles.projectItem} key={index}><span className={styles.round}></span><span className={styles.bold}>《{item.name}》</span>—&nbsp;{item.desc} </div>
                  ))
                }
              </div>
  
              <div className={styles.blankLine}> </div>
              {
                company2.map((item,index)=>(
                  <div key={index} className={styles.companyDescWrap}>
                    <div className={styles.companyDesc}>
                      <div className={styles.subContent}><span className={styles.diamond}></span><span className={styles.bold}>《{item.name}》</span>——&nbsp;{item.detailDesc} </div>
                    </div>
  
                    <div className={styles.blankLine2}></div>
  
                    <div className={styles.companyDesc}>
                      <div className={styles.subContent}>项目架构:{item.struct}</div>
                    </div>
                    
                    <div style={{paddingLeft:'10px'}}>
                      <div className={styles.companyDesc}>
                        { item.highlights.map((item,index) => <div className={styles.subContent2} key={index}><span className={styles.round2}></span>{item}</div>)}
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className={styles.interspace}></div>
              <div className={styles.title}><i className="iconfont">&#xe618;</i>专业技能/Skill</div>
              { R.skill.map((item,index)=>(
                <div className={styles.skill} key={index}> {(index === 0 || index === 4) && <div className={styles.diamond}></div>}{item}</div>
                ))
              }
            </div>
          </div>
        </div>
        }
        </>
      );
    }
  }
  
  export default Resume;
  