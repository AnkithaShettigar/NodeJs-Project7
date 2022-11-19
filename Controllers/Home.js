const Home = (req,res)=>{
    res.send(
        [
            {
                id:1,
                heading:"Udaipur, Rajasthan - The City of Lakes",
                image:"https://as1.ftcdn.net/v2/jpg/01/30/12/98/1000_F_130129868_8hyrv8S3yTZvMdUSAYxADf8Ta8RPgojf.jpg",
                descr:"Udaipur (pronunciation (help·info)) (ISO 15919: Udayapura), historically named as Udayapura, is a city and municipal corporation in Udaipur district of the state of Rajasthan, India.[3][4] It is the administrative headquarter of Udaipur district. It is the historic capital of the kingdom of Mewar in the former Rajputana Agency. It was founded in 1559 by Udai Singh II of the Sisodia clan of Rajput,[5] when he shifted his capital from the city of Chittorgarh to Udaipur after Chittorgarh was besieged by Akbar. It remained as the capital city till 1818 when it became a British princely state,[5] and thereafter the Mewar province became a part of Rajasthan when India gained independence in 1947"
            },
            {
                id:2,
                heading:"New Delhi,NCR-The city of cities",
                image:"https://as1.ftcdn.net/v2/jpg/04/01/43/06/1000_F_401430617_QU5FmwCbN3oiysrAnVN2yXreAkbPOESe.jpg",
                descr:"New Delhi (/dɛli/ (listen),[6] is the capital of India and a part of the National Capital Territory of Delhi (NCT). New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India. New Delhi is a municipality within the NCT, administrated by the NDMC, which covers mostly Lutyens' Delhi and a few adjacent areas. The municipal area is part of a larger administrative district, the New Delhi district.Although colloquially Delhi and New Delhi are used interchangeably to refer to the National Capital Territory of Delhi."
            },
            {
                id:3,
                heading:"Mumbai,Maharashtra-The City of Dreams",
                image:"https://as2.ftcdn.net/v2/jpg/02/10/97/87/1000_F_210978794_wzwBON3QTEZolR14LLQcTHlSaUgzzewl.jpg",
                descr:"Mumbai is the capital city of the Indian state of Maharashtra and the de facto financial centre of India. According to the United Nations, as of 2018, Mumbai is the second-most populous city in India after Delhi and the eighth-most populous city in the world with a population of roughly 2 crore (20 million).As per the Indian government population census of 2011, Mumbai was the most populous city in India with an estimated city proper population of 1.25 crore (12.5 million) living under the Brihanmumbai Municipal Corporation.[19] Mumbai is the centre of the Mumbai Metropolitan Region, the sixth most populous metropolitan area in the world with a population of over 2.3 crore (23 million).[20] Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city. It has the highest number of millionaires and billionaires among all cities in India."
            },
            {
                id:4,
                heading:"Ahmedabad,Gujarat-Manchester ot the East",
                image:"https://as2.ftcdn.net/v2/jpg/02/28/13/81/1000_F_228138189_HRwqdjGxQAzXAN28ci3DR8U3HLa5LM4S.jpg",
                descr:"Ahmedabad has emerged as an important economic and industrial hub in India. It is the second-largest producer of cotton in India, due to which it was known as the 'Manchester of India' along with Kanpur. Ahmedabad's stock exchange (before it was shut down in 2018) was the country's second oldest. Cricket is a popular sport in Ahmedabad; a newly built stadium, called Narendra Modi Stadium, at Motera can accommodate 132,000 spectators, making it the largest stadium in the world. The world-class Sardar Vallabhbhai Patel Sports Enclave is currently under construction and once complete, it will be one of the biggest sports centers (Sports City) in India. The effects of the liberalisation of the Indian economy have energised the city's economy towards tertiary sector activities such as commerce, communication and construction.[19] Ahmedabad's increasing population has resulted in an increase in the construction and housing industries, resulting in the development of skyscrapers."
            }, 
            {    
                id:5,
                category:"Latest",
                heading:"Jaisalmer, Rajasthan-The Golden City",
                describe:"Jaisalmer is a major tourist spot located in the northwestern state of Rajasthan in India. It is called the 'golden city' due to its bounteous golden dunes flowing in the Thar Desert.",
                descr:"Jaisalmer has been enriched by its Jain community, which has adorned the city with beautiful temples, notably the temples dedicated to the 16th Tirthankara, Shantinath, and 23rd Tirthankara, Parshvanath.There are seven Jain temples in total which are situated within the Jaisalmer fort built during the 12th and 15th centuries. Among these temples, the biggest is the Paraswanath Temple; the others are Chandraprabhu temple, Rishabdev temple, Shitalnath Temple, Kunthunath Temple, and Shantinath Temple. Known for their exquisite work of art and architecture that was predominant in the medieval era the temples are built out of yellow sandstone and have intricate engravings on them.Jaisalmer has some of the oldest libraries of India which contain rarest of the manuscripts and artefacts of Jain tradition. There are many pilgrimage centres around Jaisalmer such as Lodhruva (Lodarva), Amarsagar, Brahmsar and Pokharan.",
                tags:['Travel','/ August 21 2017'],
                image:"https://as2.ftcdn.net/v2/jpg/03/47/57/37/1000_F_347573743_58bQNnPkhAFxXwNKhtIBndZ9I68Z2l7y.jpg"
        
            },
            {   id:6,
                category:"Latest",
                heading:"Sringar,Jammu & Kashmir-The Paradise on Earth",
                describe:"Srinagar, the capital of Jammu and Kashmir, lies on the banks of the Jhelum river, and has a cool, pleasant climate all year round.",
                descr:"Nature has endowed Kashmir with implausible beauty and is rightly called “Paradise on Earth”. Kashmir is resplendent with stunning Chinar trees that turn the entire valley yellow and red when the autumn arrives, silver lakes that turn golden at the crack of dawn, and crystal blue rivers that are sourced from the icy mountains. The beautiful scenes and the unspoiled nature provide such a mesmerizing view that a person feels that he has come into another place.Before Kashmir became a valley it was a huge lake known as the Karewa Lake. The valley lies between the Karakoram Range and the Pir Panjal formed when the lake was drained during tectonic shift. It acquired the name of paradise on earth because of its uncanny resemblance with the garden of Eden described in religious and folk texts.",
                tags:['Travel','/ August 21 2017'],
                image:"https://as1.ftcdn.net/v2/jpg/02/96/89/74/1000_F_296897416_lxq5xTDde2lsqnToYmg53K3SnVsY0xtb.jpg"
            },
            {   id:7,
                category:"Latest",
                heading:"Kochi,Kerala-Queen of Arabian Sea",
                describe:"Situated on the south-west coast of India, Kochi or Cochin is a bustling commercial port city with a trading history that dates back to at least 600 years. Called as the Queen of the Arabian Sea.",
                descr:"Kochi was the centre of Indian spice trade for many centuries, and was known to the Yavanas (Greeks and Romans) as well as Jews, Syrians, Arabs, and Chinese since ancient times. Kochi rose to significance as a trading centre after the port Muziris around Kodungallur (Cranganore) was destroyed by massive flooding of Periyar in 1341. The earliest documented references to Kochi occur in books written by Chinese voyager Ma Huan during his visit to Kochi in the 15th century as part of Admiral Zheng He’s treasure fleet. There are also references to Kochi in accounts written by Italian traveller Niccolò Da Conti, who visited Kochi in 1440. According to many historians, the precursor state to Kingdom of Kochi came into existence in early 12th century, after the fall of the Chera Kingdom. The reign of the Kingdom was hereditary, and the family that ruled over the region was known as the Perumpadappu rulers in the local vernacular. ",
                tags:['Travel','/ August 21 2017'],
                image:"https://as2.ftcdn.net/v2/jpg/01/67/69/89/1000_F_167698937_mFvHPTYsBr2HRnGLLvXOy4RhRnjnUTe6.jpg"
        
            },
            {   id:8,
                category:"mainHome",
                heading:"Manali",
                describe:"One of the most popular hill stations in Himachal, Manali offers the most magnificent views",
                descr:"Manali has many trekking options around it, making it a great base for exploring this side of Himalayas. River Beas provides great rafting options in the nearby town of Kullu. Adjoining Parvati river, lies the Parvati Valley with  Kasol, Manikaran, Tosh and small villages attracting travellers for longer stays. Atal Tunnel now allows travellers to reach Sissu within a few hours making Spiti way more accessible.It snows the most in the months of January & February followed by December and March. If you're very lucky, you might find some snow in April. Tourists flock to Rohtang Pass & Solang valley for various adventure activities including skiing, paragliding, horse-riding & zorbing. Rohtang Pass is almost always covered with snow and can often get overcrowded and see traffic jams.",
                tags:['Travel','/ August 21 2017'],
                image:"https://as2.ftcdn.net/v2/jpg/01/71/19/19/1000_F_171191968_h1yWvnUTa0MM6iIBnGdAHZeUAJEh9dBh.jpg"
        
        
            },
            {   id:9,
                category:"mainHome",
                heading:"LehLadakh",
                describe:"Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir",
                descr:"Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, Ladakh is a riot of intricate murals and red-robed monks. It is said that only in Ladakh can a man sitting in the sun with his feet in the shade suffer from sunstroke and frostbite at the same time. With a culture similar to Tibetan culture, the people of Ladakh are friendly and welcoming to tourists.Ladakh is an adventure playground for rafting and high-altitude trekking. Note that Leh Ladakh is inaccessible by road outside the summer months. The route passes close altogether from around October to May, and the only way to reach is by air.",
                tags:['Travel','/ August 21 2017'],
                image:"https://as1.ftcdn.net/v2/jpg/01/37/42/76/1000_F_137427608_f7FUGdVoFpsKVlIMPZsY4PnSSsoujOlE.jpg"
        
        
            },
            {   id:10,
                category:"mainHome",
                heading:"Coorg",
                describe:"Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills",
                descr:"Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people. The Kodavas, a local clan specializing in martial arts, are especially notable for their keen hospitality.Coorg, officially known as Kodagu, is the most affluent hill station in Karnataka. It is well known for its breathtakingly exotic scenery and lush greenery. Forest covered hills, spice and coffee plantations only add to the landscape. Madikeri is the region's centre point with all transportation for getting around starting from here. On a visit to Coorg, cover the beautiful towns like Virajpet, Kushalnagar, Gonikoppal, Pollibetta, and Somwarpet, and experience the beautiful concept of homestays to make your experience more memorable!",
                tags:['Travel','/ August 21 2017'],
                image:"https://as2.ftcdn.net/v2/jpg/01/84/79/85/1000_F_184798594_Ps8wuYpw13jLsLcUDo8LuFeDn3aliZ0y.jpg"
        
        
            }, 
            {   id:11,
                category:"mainHome",
                heading:"Andaman",
                describe:"Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India",
                descr:"Andaman & Nicobar Islands comprises 572 islands, only 37 of which are inhabited, and a few are open to tourists. Havelock Island is one of the largest and the most popular islands of all Andaman & Nicobar Islands. Travellers typically enter from Port Blair via flight or ship and spend multiple nights in Havelock and Neil Islands that offer some great resorts.Port Blair is generally used as a base city to catch ferries to nearby islands. However, tourists also spend a day or two here to explore the town and nearby beaches. People also take day trips to Ross Island and North Bay Island or Baratang and Jolly Buoy island from Port Blair.Andamans have the most exotic beach and some of them also give the opportunity of trying out a number of water sports such as Scuba Diving, Snorkeling, Sea Walk etc.",
                tags:['Travel','/ August 21 2017'],
                image:"https://as1.ftcdn.net/v2/jpg/02/66/25/02/1000_F_266250263_vs1yMAvImZBye3Vdr1ZWeulZz8Q7a6XL.jpg"
        
        
            },
            {   
                id:12,
                number:"2",
                category:"mainMiddle",
                heading:"Kanyakumari,Tamil Nadu",
                descr:"Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields. Kanyakumari is also the only place in India where you can observe the sunrise and sunset at the same beach.The town is not only popular for its unique phenomenon but also its temples and the Vivekananda Rock Memorial among other iconic monuments.",
                tags:['','/ August 21 2017'],
                image:"https://as1.ftcdn.net/v2/jpg/01/27/29/86/1000_F_127298629_MAnE9PuYwv8zhiyr87qq9buqZt5bIl9V.jpg"
            },
            {   
                id:13,
                number:"3",
                category:"mainMiddle",
                heading:"Kanyakumari,Tamil Nadu",
                tags:['','/ August 21 2017'],
                descr:"Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields. Kanyakumari is also the only place in India where you can observe the sunrise and sunset at the same beach.The town is not only popular for its unique phenomenon but also its temples and the Vivekananda Rock Memorial among other iconic monuments.",
                image:"https://as1.ftcdn.net/v2/jpg/01/27/29/86/1000_F_127298629_MAnE9PuYwv8zhiyr87qq9buqZt5bIl9V.jpg"
            },
            {   
                id:14,
                number:"4",
                category:"mainMiddle",
                heading:"Kanyakumari,Tamil Nadu",
                descr:"Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields. Kanyakumari is also the only place in India where you can observe the sunrise and sunset at the same beach.The town is not only popular for its unique phenomenon but also its temples and the Vivekananda Rock Memorial among other iconic monuments.",
                tags:['','/ August 21 2017'],
                image:"https://as1.ftcdn.net/v2/jpg/01/27/29/86/1000_F_127298629_MAnE9PuYwv8zhiyr87qq9buqZt5bIl9V.jpg"
            },
            {
                id:15,
                heading:"Kanyakumari,Tamil Nadu",
                descr:"Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower.The town has a mountainous terrain with elevated patches of hills, coconut trees and lined with paddy fields. Kanyakumari is also the only place in India where you can observe the sunrise and sunset at the same beach.The town is not only popular for its unique phenomenon but also its temples and the Vivekananda Rock Memorial among other iconic monuments.",
                image:"https://as1.ftcdn.net/v2/jpg/01/27/29/86/1000_F_127298629_MAnE9PuYwv8zhiyr87qq9buqZt5bIl9V.jpg"
        
            }
             
        ]
    )
}

module.exports.homeData = Home;