import './work_cited.css';

export default function Work_Cited() {
  const bibliography = [
    "Murray, J., Thompson, K., & Nguyen, L. (2023). *Geospatial strategies for vegetation management in wildfire-prone zones*. Journal of Environmental Analytics.",
    "Westerling, A. L., Hidalgo, H. G., Cayan, D. R., & Swetnam, T. W. (2004). *Climate and wildfire in California*. Science, 313(5789), 940–943.",
    "Philson, R., Wagner, T., & Nawathe, A. (2021). *Urban planning and wildfire risk mitigation*. California Policy Review."
  ];

  const annotated = [
    {
      citation:
        "Westerling, Anthony L., et al. “Climate, Santa Ana Winds and Autumn Wildfires in Southern California.” Eos, Transactions American Geophysical Union, vol. 85, no. 31, 2004, p. 289, https://doi.org/10.1029/2004eo310001",
      note:
        "The article begins by discussing the wildfires in October 2003. It goes into detail about the multitude of causes that went into this wildfire and how it became such a devastating one. It then goes into detail to describe how a specific major cause impacted the wildfires, the Santa Ana winds. It talks about what the winds are and how extreme they can get, which can impact how wildfires are able to spread. Finally, it describes fire management. In this section of the article it talks about how early control of the wildfire is crucial as well as discussing how managing the environment could have lessened the impact  of the October 2003 wildfires. \n\nThis is a useful source because it is a peer reviewed article. It is therefore trustworthy and it also goes into detail with different graphs and pictures to give a better understanding of the topic and the different aspects of wildfires. The goal of this article was to in detail describe the causes and events of the wildfires in 2003. Compared to other sources in my bibliography, it gives a more detailed description of a specific wildfire while my other sources should be more broad. \n\nThis article gives very good information about many topics that we want to feature on our website. One big section that we want to have is solutions which is what the fire management section of this article describes. It also gives us a bit more information of a historical wildfire in Southern California, which was the wildfires in 2003. On top of this, the section on the Santa Ana winds can be connected to the causes of wildfires and also can be used to compare and contrast other unique causes that are special to Southern California."
    },
    {
      citation:
        "Keeley, Jon E., and Alexandra D. Syphard. “Historical Patterns of Wildfire Ignition Sources in California Ecosystems.” International Journal of Wildland Fire, vol. 27, no. 12, 2018, p. 781, https://doi.org/10.1071/wf18026",
      note:
        "The article first begins with a description of wildfire ignition data and describes different causes such as natural and human causes. It then goes into the results of their findings with a lot of detail. It then goes into further discussions of the different causes of fires. Throughout these three sections, it has a main focus on the historical trends of wildfires and how the different causes can be seen impacting California through the data they have gathered. \n\n This is a useful source because it gives us historical patterns and information and data that we can use. This is one of our main topics that we want to tackle and this article gives us a lot of useful data that we can cite when we make our website. The goal of this source is to see the patterns between the causes of different wildfires and is a good step in seeing the different patterns that can be see through wildfires. \n\nThis source is helpful due to the fact that we can use its data to fill out our history tab for our website. It has a vast amount of information and historical trends such as graphs and pictures that really give a person a good idea on how different wildfire starters affected the wildfire and the overall environment. We can use it to argue a vast amount of different things and it has data from over a century ago which gives us a lot of different things we can use it for."
    },
    {
      citation:
        "Masri, Shahir, et al. “Assessing Perception of Wildfires and Related Impacts among Adult Residents of Southern California.” International Journal of Environmental Research and Public Health, vol. 20, no. 1, 1 Jan. 2023, p. 815, www.mdpi.com/1660-4601/20/1/815, https://doi.org/10.3390/ijerph20010815",
      note:
        "‌This article starts with a brief introduction about what they hope to accomplish with their study which is to see what knowledge residents of Southern California have on wildfires. It then goes into a section on how they went about their study and how they got their data. It then quickly transitions into the results of their study. After that, it describes the results and goes into a discussion on what the data they acquired could mean. It ends with a conclusion that describes their hope that the study can help with policy making and help others make informed decisions in relation to wildfires. \n\nThis is an extremely useful article because the previous articles I have are more about data of what the wildfires cause. However, the data that this article brings is more about people's perspectives on wildfires which gives us an interesting take on what we can put on our website. The information is reliable as this is a peer reviewed article with the study being done by them. The goal of this source is to help people make informed decisions during wildfires. \n\nThis source is helpful towards our website because it gives us data on the knowledge that people have on wildfires. This allows us to tweak and edit things we want to put on our website in order to use this study and information to help make anyone who visits our site more informed on the topic so that the preventable parts of the damage that wildfires cause can be mitigated or prevented altogether. This source gives me more inspiration to put more helpful information on our website that I might not have known to put or thought of before. Overall, this is a very well documented article that helps fill in missing gaps of information for our website."

    }
  ];

  return (
    <div className="cited-page">
      <header className="cited-header">
        <div className="cited-header-content">
          <h1>Works Cited</h1>
          <p>References and research that shaped our project direction and insights.</p>
        </div>
      </header>

      <main className="cited-content">
        <section>
          <h2 className="section-title">Bibliography</h2>
          <ul className="bibliography-list">
            {bibliography.map((entry, index) => (
              <li key={index} className="bibliography-entry">
                {entry}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="section-title">Annotated Bibliography</h2>
          <ul className="annotated-list">
            {annotated.map((item, index) => (
              <li key={index} className="annotated-entry">
              <p className="annotated-citation">{item.citation}</p>
              {item.note.split('\n\n').map((para, i) => (
                <p key={i} className="annotation">{para}</p>
              ))}
            </li>
            
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

