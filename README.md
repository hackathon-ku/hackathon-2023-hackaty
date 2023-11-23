[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DRfJgED0)
# KU Hackathon 2023 
<p align="center">
<img width="96px" src="https://s3.tech.nisit.ku.ac.th/assets/ku-hackathon/main-logo.webp" />
</p>

รายละเอียดโครงการ : https://docs.google.com/document/d/1bn_71K9RF_K8MaBbZNgUAtS7PgFJkon91lOat7AtFxw/edit


คำสั่ง git พื้นฐานในการอัปโหลดโค้ดขึ้นมาที่ repository นี้

```bash
git add .
git commit -m "<commit_message>"
git push -u origin main
```
# SOS-Alert @Hackathy : “ ให้เราเป็นความปลอดภัยของนิสิต มก ”
* นิสิตไม่รู้ต้องแจ้งเหตุด่วนเหตุร้ายที่ไหน 
* นิสิตไม่ได้รับแจ้งเตือนเหตุฉุกเฉิน 
* นิสิตไม่รู้จะร้องเรียนปัญหากับใคร 
## Members
- Wanatprun Kradee
- [Supawee Borvornsaktavorn](https://github.com/katisd)
- [Thanadol Udomsirinanchai](https://github.com/ThanadolU)
- [Preawpan Thamapipol](https://github.com/Tezigudo)
## SOS-Alert
SOS Alert ให้บริการ 3 ฟีเจอร์ เพื่อตอบโจทย์ปัญหาของนิสิต
### 1. SOS Call(ซอส-คอล)
"ไม่รู้เบอร์ติดต่อฉุกเฉินพี่ยาม พอเกิดเหตุขึ้นจริงก็ทำอะไรไม่ถูก"
ไม่ต้องกังวลอีกต่อไป เรารวบรวมเบอร์ติดต่อฉุกเฉินไว้ให้คุณใน SOS Call
(ซอส-คอล) แล้วหากไม่รู้จะติดต่อใคร สามารถกดปุ่มสีแดงเพื่อติดต่อหน่วยรักษาความปลอดภัย ม.เกษตรเพื่อประสานงานต่อได้!
![SOS-Call](https://github.com/hackathon-ku/hackathon-2023-hackaty/assets/90249534/c04b42bb-9182-4cc3-a4ec-0cb90791a8a9)
### 2. SOS Alert Notification
“ แย่แล้ว นั่นมันควันอะไรกัน นี่มันเกิดอะไรขึ้นกันเนี่ย ” เคยไหมเวลาเกิดเหตุฉุกเฉินแต่เราก็ไม่เคยรู้เลยว่ามันเกิดอะไรขึ้น ปัญหานี้จะหมดไฟเพียงแค่มีฟีเจอร์ SOS Alert Notification ฟีเจอร์ที่จะคอยแจ้งเตือนเหตุฉุกเฉินบนแอพ Nisit KU และยังสามารถรู้ระยะห่างของตัวนิสิตและจุดเกิดเหตุ

![SOS Noti](https://github.com/hackathon-ku/hackathon-2023-hackaty/assets/90249534/2e7b3469-8693-4904-aa20-bef4a3c85302)

### 3. SOS Alert Map
“ ไฟตรงคณะเราดับ อยากแก้ไขจัง ต้องร้องเรียนที่ใครเนี่ย” ฟีเจอร์ SOS Alert Map ที่จะสามารถร้องเรียนปัญหาที่พบเจอในมหาวิทยาลัยได้ แล้วปัญหานั้นจะขึ้นใน Map เพื่อให้เรารู้ตำแหน่ง รายละเอียด รูปภาพ และยังสามารถเห็นด้วยกับคำร้องของเพื่อนที่แจ้งปัญหานั้นไปแล้วด้วยได้



![SOS-Alert-Map](https://github.com/hackathon-ku/hackathon-2023-hackaty/assets/90249534/c04b42bb-9182-4cc3-a4ec-0cb90791a8a9)

# Design

* [Figma File(View)](https://www.figma.com/file/zPxiFBcFd4mtMNQI9ikhJo/Hackatie?type=design&node-id=414%3A2042&mode=design&t=jJY4LnwT1meve31f-1)
* [Figma Prototype(Nisit)](https://www.figma.com/proto/zPxiFBcFd4mtMNQI9ikhJo/Hackatie?type=design&node-id=299-1128&t=CdgRycSST9TvjtWv-1&scaling=min-zoom&page-id=299%3A1127&starting-point-node-id=299%3A1128&mode=design)
* [Figma Prototype(Admin)](https://www.figma.com/proto/zPxiFBcFd4mtMNQI9ikhJo/Hackatie?type=design&node-id=197-1024&t=uQrnKuhiDGom81GL-1&scaling=contain&page-id=0%3A1&starting-point-node-id=197%3A1024&mode=design)

# Frontend
## Technologies Used

- React.js
- Vite
- TypeScript
- Google Maps API
# Installation and Setup

## Clone the Repository
```bash
git clone https://github.com/hackathon-ku/hackathon-2023-hackaty.git
cd hackathon-2023-hackaty
```

## Install Dependencies

Using npm:

`npm install`
or
`yarn install`

## Configure Google Maps API

To use the Google Maps API, you will need to obtain an API key. Once you have it, create a .env file in the root of the project and add your API key as
```REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here```
After starting the project, open http://localhost:5173 in your browser to use the application.

## Contributing

Contributions to the SOS Alert project are highly appreciated. If you're interested in helping out:

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Contact

For any questions, suggestions, or issues, please contact us at [setthanan@50domain.com]. You can also raise an issue in the GitHub repository.

## Acknowledgements

Thanks to all contributors and maintainers.
Special thanks to Nisit KU for the collaboration and support.
Note: Ensure all placeholders (like your API key, email address, etc.) are replaced with actual, relevant information for your project.
