import { useEffect, useRef, useState } from "react";
import Image1 from "../../src/assets/images/place-holder0.png";
import Image2 from "../../src/assets/images/place-holder3.png";
import Image3 from "../../src/assets/images/place-holder0-1.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Circle,
  Favorite,
  FavoriteBorder,
  InfoOutlined,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { toast } from "react-toastify";

const qaData = [
  {
    question: "What is the difference between whey A and whey B?",
    answer:
      "Lorem ipsum dolor sit met, consectetur adipiscing elit, ed Do eius mod tempor incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa ead commonde",
  },
  {
    question: "What is the difference between whey A and whey B?",
    answer:
      "Lorem ipsum dolor sit met, consectetur adipiscing elit, ed Do eius mod tempor incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa ead commonde",
  },
];

const ratingData = [
  { label: "เพิ่มกล้ามเนื้อ", rating: 2 },
  { label: "ลดไขมัน", rating: 2 },
  { label: "เพิ่มน้ำหนัก", rating: 2 },
  { label: "ฟื้นฟูกล้ามเนื้อ", rating: 2 },
  { label: "ความเร็วในการดูดซึม", rating: 2 },
];

const tabsArray = [
  { label: "Overview", value: "overview" },
  { label: "Benefit", value: "benefit" },
  { label: "Direction", value: "direction" },
  { label: "Storage Method", value: "storage" },
  { label: "Cautions", value: "cautions" },
  { label: "Q & A", value: "qa" },
];

export default function DetailProduct() {
  const [selectedSize, setSelectedSize] = useState("sample");
  const [activeTab, setActiveTab] = useState(0);
  const [whishList, setWhishList] = useState(false);

  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.clientHeight + 60);
    }
  }, [activeTab]);

  return (
    <div>
      <Carousel
        showArrows={true}
        // showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src={Image1} alt="image1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Image2} alt="image2" />
          <p className="legend">Legend 2</p>
        </div>

        <div>
          <img src={Image3} alt="image3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      <Box sx={{ padding: "20px" }}>
        {/* Product Title */}
        <Typography variant="h5" gutterBottom>
          BAAM 100% MY WHEY
        </Typography>

        {/* Reviews and Points */}
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          {/* Rating */}
          <Typography variant="body1">
            ★★★★★
            <span style={{ color: "#999", marginLeft: "10px" }}>
              (200 Reviews)
            </span>
          </Typography>
          {/* Points */}
          <Typography
            sx={{ marginLeft: "auto", color: "blue", fontWeight: "bold" }}
          >
            500
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "20px", display: "flex" }}>
          <Box
            sx={{
              paddingRight: "10px",
              borderRight: "1px solid #ccc",
              marginRight: "10px",
            }}
          >
            <Typography variant="subtitle1" color="textSecondary">
              Price
            </Typography>
            <Typography variant="h5" color="error">
              ฿1,800{" "}
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                ฿2,000
              </span>
            </Typography>
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle1" color="textSecondary">
                Your Price
              </Typography>
              <Tooltip title="This is your special price">
                <IconButton size="small">
                  <InfoOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="h5" color="error">
              ฿1,600
            </Typography>
          </Box>
        </Box>

        {/* Size Selection */}
        <Box sx={{ display: "flex", marginBottom: "20px" }}>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "sample" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("sample")}
          >
            Sample
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "250g" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("250g")}
          >
            250g
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "2lb" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("2lb")}
          >
            2lb
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "5lb" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("5lb")}
          >
            5lb
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "10lb" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("10lb")}
          >
            10lb
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginRight: "10px",
              backgroundColor: selectedSize === "12lb" ? "#ccc" : "",
            }}
            onClick={() => setSelectedSize("12lb")}
          >
            12lb
          </Button>
        </Box>

        {/* View Supplement Fact */}
        <Button variant="outlined" fullWidth>
          View Supplement Fact
        </Button>
      </Box>

      <Tabs
        value={activeTab}
        onChange={(event, newValue) => {
          setActiveTab(newValue);

          // ต้องใช้ setTimeout เพื่อให้มันไป scroll หลังจากที่ height ของ content ถูก set ค่าใหม่แล้ว
          setTimeout(() => {
            if (tabsRef.current) {
              window.scrollTo({
                top: tabsRef.current.offsetTop,
                behavior: "smooth",
              });
            }
          }, 500);

          // ทำได้ แต่ว่าความสูงมันยังไม่ set ค่าใหม่เลยทำให้มันไม่ scroll ไปที่ตำแหน่งที่ต้องการ
          // if (tabsRef.current) {
          //   window.scrollTo({
          //     top: tabsRef.current.offsetTop,
          //     behavior: "smooth",
          //   });
          // }

          // if (tabsRef.current) {
          // tabsRef.current.scrollIntoView({ behavior: "smooth" });

          // tabsRef.current.scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          //   inline: "nearest",
          // });
          // }
        }}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
        sx={{
          width: "100%",
          marginBottom: "20px",
        }}
        ref={tabsRef}
      >
        {tabsArray.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              flexGrow: 1,
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          height: `${height}px`,
          transition: "height 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <SwipeableViews
          index={activeTab}
          sx={{
            transition: "height 0.5s",
          }}
        >
          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 0 ? contentRef : null}
          >
            <Typography variant="h6" gutterBottom>
              Whey Protein
            </Typography>

            <Box sx={{ marginBottom: "20px" }}>
              {ratingData.map((item, index) => (
                <Grid
                  container
                  key={index}
                  alignItems="center"
                  sx={{ marginBottom: "10px" }}
                >
                  <Grid item xs={3}>
                    <Typography>{item.label}</Typography>
                  </Grid>
                  <Grid item xs={9}>
                    {/* Display rating circles */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Circle
                          key={i}
                          fontSize="small"
                          sx={{
                            color: i < item.rating ? "blue" : "lightgray",
                            marginRight: "4px",
                          }}
                        />
                      ))}
                  </Grid>
                </Grid>
              ))}
            </Box>

            <Typography variant="body2" color="textSecondary" gutterBottom>
              ** เป็นเพียงการประเมินเพื่อสะท้อน สรรพคุณสินค้าเท่านั้น
              ไม่ได้เปรียนเทียบระหว่างสินค้า
            </Typography>

            <Typography variant="body1" gutterBottom sx={{ marginTop: "20px" }}>
              <strong>BAAM!! MY WHEY</strong> เป็นเวย์ที่มีส่วนผสมของ Whey
              protein Concentrate เป็นหลัก (95%+) ที่มีความคุ้มค่าด้านราคาสูง
              และสามารถให้ผลได้จริง ตอบโจทย์ได้ทุกเป้าหมาย
              ไม่ว่าจะเพิ่มกล้ามเนื้อ หรือลดไขมัน สามารถใช้ได้ทั้งผู้ชาย
              และผู้หญิง BAAM!! MY WHEY จึงเหมาะสำหรับเป็นเวย์ถุงแรกของทุกคน
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="โปรตีนดูดซึมไว 25 g. / ช้อน" />
              </ListItem>
              <ListItem>
                <ListItemText primary="พลังงาน 140 Kcal. (ไขมัน 2 กรัม, คาร์โบไฮเดรท 4 กรัม)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ให้ BCAA ~5.5 g. , Glutamine ~4 g." />
              </ListItem>
              <ListItem>
                <ListItemText primary="ช่วยซ่อมแซม ฟื้นฟู และ เสริมสร้างมวลกล้ามเนื้อ" />
              </ListItem>
              <ListItem>
                <ListItemText primary="มีส่วนช่วยลดความอยากอาหาร และของหวานได้" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ไม่มีการใส่น้ำตาล (ใช้สารให้ความหวานทดแทน)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ไม่มีสารอันตราย และ สารต้องห้ามทางกีฬา" />
              </ListItem>
              <ListItem>
                <ListItemText primary="เวย์โปรตีน จาก USA นำเข้า และ ตรวจคุณภาพ โดย FITWHEY" />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 1 ? contentRef : null}
          >
            <Typography variant="h6" gutterBottom>
              เวย์โปรตีน โปรตีน สกัดจากนมวัวธรรมชาติ
            </Typography>

            <Typography variant="body1" gutterBottom>
              แหล่งโปรตีนคุณภาพสูง ตัวเลือกที่ดีอันดับต้นๆ ด้วยความสะดวก
              และความบริสุทธิ์ของโปรตีนที่สูง ได้โปรตีนเน้นๆ
              โดยไม่ต้องรับพลังงาน ส่วนเกินจากไขมัน
              หรือแป้งที่จะมาพร้อมอาหารปกติ แถมยังสามารถย่อย และดูดซึมได้ไว
              ไม่เป็นภาระของกระเพาะอาหาร
              จึงเป็นอาหารเสริมตัวสำคัญสำหรับทุกเป้าหมาย ไม่ว่าจะสร้างกล้ามเนื้อ
              ลดไขมัน เพิ่มน้ำหนัก หรือ จะทานเพื่อสุขภาพ เสริมโปรตีนให้เพียงพอ
              เวย์โปรตีนก็ตอบได้ทุกโจทย์
            </Typography>

            <Typography variant="h6" gutterBottom>
              ประโยชน์ของเวย์โปรตีน
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>ซ่อมแซม และ สร้างกล้ามเนื้อ</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              เวย์โปรตีน โปรตีนล้วนๆ ที่อุดมไปด้วย BCAA
              ที่เป็นกรดอะมิโนที่จำเป็น ที่เรียกว่าเป็นกุญแจสำคัญในการจุดชนวนการ
              สร้างกล้ามเนื้อของร่างกาย และมีกรดอะมิโนอื่นๆ รวมกว่า 19 ชนิด
              ที่เป็นสารอาหารสำคัญสำหรับร่างกาย ช่วยทำให้ร่างกาย
              ฟื้นฟูกล้ามเนื้อได้ไวขึ้น และสร้างมวลกล้ามเนื้อที่มากขึ้น
              (ปริมาณโปรตีนรวม (จากทุกๆแหล่ง) ที่ควรได้รับต่อวัน
              เพื่อการสร้างกล้ามเนื้อได้เต็มที่ แนะนำอยู่ที่ ประมาณ 1.5 - 2 กรัม
              / น้ำหนักตัว 1 กิโลกรัม ขึ้นไป)
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>ร่างกายสามารถนำไปใช้ได้เต็มเม็ดเต็มหน่วย</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              เวย์โปรตีน เป็นโปรตีนกลุ่มที่ร่างกายสามารถนำไปใช้ได้ดีที่สุด
              ถ้าเราลองเทียบจากค่าง่ายๆ ที่เรารู้จักกันอย่างค่า BV (Biological
              Value)[1] อกไก่มีคะแนนอยู่ที่ 79, ไข่ไก่ ได้คะแนน 100 ส่วน
              เวย์โปรตีน มีคะแนนอยู่ที่ 104 หรือ ค่าที่เจาะจงขึ้น อย่างค่า DIAAS
              (Digestible Indispensable Amino Acid Scores)[2]
              อกไก่มีคะแนนอยู่ที่ 1 (1.08), ไข่ไก่ ได้ 1 (1.13) และ เวย์โปรตีน
              ได้ 1 (1.07) คะแนน จะเห็นว่า เวย์โปรตีน นั้น
              อยู่ในกลุ่มโปรตีนที่มีคุณภาพสูงที่สุด ไม่ต่างจาก ไก่ และไข่เลย
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="ค่า Biological Value (BV) คือ ค่าพื้นฐานเพื่อบอกคุณภาพของโปรตีน โดยเทียบระหว่าง โปรตีนที่ได้รับ กับ ที่ร่างกายนำไปใช้ได้" />
              </ListItem>
              <ListItem>
                <ListItemText primary="ค่า Digestible Indispensable Amino Acid Scores (DIASS) คือ ค่าที่ใช้บอกคุณภาพของโปรตีนที่แม่นยำขึ้น และเป็นค่าหลักที่ใช้บอกคุณภาพ โปรตีนในปัจจุบัน ที่คิดจากการดูซึมกรดอะมิโนต่างๆในลำไส้เล็ก เทียบ ปริมาณกรดอะมืโนที่ดูดซึมได้ กับ กรดอะมิโนที่ร่างกายต้องการ" />
              </ListItem>
            </List>

            <Typography variant="body1" gutterBottom>
              <strong>ช่วยควบคุมน้ำหนักได้</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              เวย์โปรตีนช่วยคุมความอยากอาหาร และของหวานได้ดี
              อย่างแรกเพราะรสชาติต่างๆที่ทำออกมา สามารถแทนของหวานได้
              แต่ไม่ต้องรับ แป้ง หรือน้ำตาลส่วนเกิน เป็นแหล่งสารอาหาร
              และพลังงานที่มีคุณภาพกว่าของหวานมาก
            </Typography>

            <Typography variant="body1" gutterBottom>
              สารอาหารประเภทโปรตีนยังทำให้ร่างกานรู้สึกอิ่มได้นานกว่าสารอาหารประเภทแป้ง
              ทำให้มีส่วนช่วยในการควบคุมน้ำหนักได้ และการทานโปรตีนที่สูง
              อาจส่งผลให้ร่างกายมีอัตราการเผาผลาญที่สูงขึ้น
              โดยเฉพาะเมื่อควบคู่กับการออกกำลังกาย
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>เป็นอาหารเสริมที่ไม่มีอันตราย</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              เวย์โปรตีนเป็นอาหารเสริมที่มีงานวิจัยรองรับมากเป็นอันดับต้นๆ
              และถูกใช้มากเป็นเวลาหลายสิบปี โดยที่ยังไม่พบอันตราย
              หรือผลข้างเคียงของการทานเวย์โปรตีน สามารถใช้ได้ทุกเพศ ทุกวัย
              และสามารถทานเสริมกับอาหารหลักได้ โดยไม่จำกัดแค่ นักกีฬา
              หรือคนที่ออกกำลังกายเท่านั้น
            </Typography>

            <Typography variant="body1" gutterBottom>
              เวย์โปรตีน จึงเป็นอาหารเสริมพื้นฐาน ที่ควรเลือกใช้
              ไม่ว่าเป้าหมายของคุณจะเป็นอะไรก็ตาม
            </Typography>
          </Box>

          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 2 ? contentRef : null}
          >
            <img src={Image3} alt="image3" />
          </Box>

          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 3 ? contentRef : null}
          >
            <Typography variant="h6" gutterBottom>
              Storage
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary="1. เก็บในที่ที่แห้ง และ เย็น (ไม่เกิน 25 - 30 °C) และไม่โดนแสงแดด" />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. เมื่อเปิดแล้ว ต้องปิดให้สนิททุกครั้ง" />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. ล้างมือให้สะอาด และเช็ดมือให้แห้งทุกครั้ง ก่อนตักผง" />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. หมั่นเขย่าเมื่อตั้งทิ้งไว้เป็นเวลานาน เพื่อป้องกันการแยกชั้น และลดโอกาสการจับตัวกันเป็นก้อนของผง" />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 4 ? contentRef : null}
          >
            <Typography variant="h6" gutterBottom>
              Cautions
            </Typography>
          </Box>

          <Box
            sx={{ padding: "20px" }}
            ref={activeTab === 5 ? contentRef : null}
          >
            {qaData.map((item, index) => (
              <Box key={index} sx={{ marginBottom: "20px" }}>
                <Typography variant="body1" gutterBottom>
                  Question: {item.question}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Answer: {item.answer}
                </Typography>

                <Divider />
              </Box>
            ))}
          </Box>
        </SwipeableViews>
      </Box>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px",
          backgroundColor: "white",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            onClick={() => {
              setWhishList(!whishList);
              toast.success("Product added to wishlist");
            }}
          >
            {whishList ? (
              <Favorite
                sx={{
                  color: "#ff0000",
                  fontSize: "30px",
                }}
              />
            ) : (
              <FavoriteBorder
                sx={{
                  color: "#ff0000",
                  fontSize: "30px",
                }}
              />
            )}
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#0044cc",
              color: "white",
              "&:hover": {
                backgroundColor: "#0033aa",
              },
            }}
            onClick={() => {
              toast.success("Product added to cart");
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </div>
  );
}
