import { Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TextField from "@mui/material/TextField";
import ContainedButton from "../components/ContainedButton";
import { supabase } from "../config/index";
import "../static/css/index.css";
import images from "../static/images/governors/govImages";
import Divider from "@mui/material/Divider";
import { Close } from "@mui/icons-material/";
import Button from "@mui/material/Button";
import ministerimages from "../static/images/ministers/ministerimg";
import { PaystackButton, PaystackConsumer } from "react-paystack";
import lagimage from "../images/map.png";
import ValuesCard from "../components/ValuesCard";
import BlogCard from "../components/BlogCard2";
import newsimages from "../images/images";

import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import role_model_images from "../static/images/role-model/role-model-image";

function Category() {
  const { id, category } = useParams();
  const new_supabase = supabase();

  // const { setVoteModalDisplay } = useCategory();
  const [whoState, setwhoState] = useState();
  const [vote_count, setVote_count] = useState("");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [votedSuc, setVotedSuc] = useState("");

  const [compState, setStates] = useState({
    title: "",
    topupErr: false,
  });

  // you can call this function anything
  const handleSuccess = (reference) => {
    setLoading(true);
    let voter = {
      name: "",
      email: email,
      phone: "",
      payref: reference,
    };
    for (let i = 0; i < number; i++) {
      new_supabase
        .from("votes")
        .insert([
          {
            category: category,
            voted: id,
            voter: voter,
          },
        ])
        .then((suc) => {
          setLoading(false);
          setVotedSuc(true);
          getVotes();
        })
        .catch((err) => {});
    }
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  // paystack payload
  let amount = number * 50;
  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount + "00",
    publicKey: "pk_live_bd2306790af6962d941c0f45888d5335328f1b15",
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  const allStates = [
    {
      state: "Abia",
      gov: "Okezie Ikpeazu",
      id: 1,
      image: images.Abia,
    },
    {
      state: "Adamawa",
      gov: "Ahmadu Umaru",
      id: 2,
      image: images.Adamawa,
    },
    {
      state: "Akwa Ibom",
      gov: "Udom Gabriel E.",
      id: 3,
      image: images.Akwaibom,
    },
    {
      state: "Anambra",
      gov: "Charles C. S.",
      id: 4,
      image: images.Anambra,
    },
    {
      state: "Bauchi",
      gov: "Bala Muhammed",
      id: 5,
      image: images.Bauchi,
    },
    {
      state: "Bayelsa",
      gov: "Douye Diri",
      id: 6,
      image: images.Bayelsa,
    },
    {
      state: "Benue",
      gov: "Samuel Ortom",
      id: 7,
      image: images.Benue,
    },
    {
      state: "Borno",
      gov: "Babagana Umara Z.",
      id: 8,
      image: images.Borno,
    },
    {
      state: "Cross River",
      gov: "Benedict Ayade",
      id: 9,
      image: images.CrossRivers,
    },
    {
      state: "Delta",
      gov: "Ifeanyi Okowa",
      id: 10,
      image: images.Delta,
    },
    {
      state: "Ebonyi",
      gov: "Dave Umahi",
      id: 11,
      image: images.Ebonyi,
    },
    {
      state: "Edo",
      gov: "Godwin Obaseki",
      id: 12,
      image: images.Edo,
    },
    {
      state: "Ekiti",
      gov: "Kayode Fayemi",
      id: 13,
      image: images.Ekiti,
    },
    {
      state: "Enugu",
      gov: "Ifeanyi Ugwuanyi",
      id: 14,
      image: images.Enugu,
    },
    {
      state: "Gombe",
      gov: "Hope Uzodinma",
      id: 15,
      image: images.Gombe,
    },
    {
      state: "Imo",
      gov: "Mohammed B. A.",
      id: 16,
      image: images.Imo,
    },
    {
      state: "Jigawa State",
      gov: "Mohammed B. A.",
      id: 17,
      image: images.Jigawa,
    },
    {
      state: "Kaduna",
      gov: "N. A. el-Rufai",
      id: 18,
      image: images.Kaduna,
    },
    {
      state: "Kano",
      gov: "Abdullahi U. G.",
      id: 19,
      image: images.Kano,
    },
    {
      state: "Katsina",
      gov: "Aminu Bello Masari",
      id: 20,
      image: images.Katsina,
    },
    {
      state: "Kebbi",
      gov: "Abubakar Atiku B.",
      id: 21,
      image: images.Kebbi,
    },
    {
      state: "Kogi",
      gov: "Yahaya Bello",
      id: 22,
      image: images.Kogi,
    },
    {
      state: "Kwara",
      gov: "AbdulRahman A",
      id: 23,
      image: images.Kwara,
    },
    {
      state: "Lagos",
      gov: "Babajide S.",
      id: 24,
      image: images.Lagos,
    },
    {
      state: "Nasarawa",
      gov: "Abdullahi Sule",
      id: 25,
      image: images.Nasarawa,
    },
    {
      state: "Niger",
      gov: "Abubakar Sani B.",
      id: 26,
      image: images.Niger,
    },
    {
      state: "Ogun",
      gov: "Dapo Abiodun",
      id: 27,
      image: images.Ogun,
    },
    {
      state: "Ondo",
      gov: "Oluwarotimi O. A.",
      id: 28,
      image: images.Ondo,
    },
    {
      state: "Osun",
      gov: "Adegboyega O.",
      id: 29,
      image: images.Osun,
    },
    {
      state: "Oyo",
      gov: "Oluwaseyi Makinde",
      id: 30,
      image: images.Oyo,
    },
    {
      state: "Plateau",
      gov: "Simon Lalong",
      id: 31,
      image: images.Plateau,
    },
    {
      state: "Rivers",
      gov: "Ezenwo N. Wike",
      id: 32,
      image: images.Rivers,
    },
    {
      state: "Sokoto",
      gov: "Aminu Waziri T.",
      id: 33,
      image: images.Sokoto,
    },
    {
      state: "Taraba",
      gov: "Darius Ishaku",
      id: 34,
      image: images.Taraba,
    },
    {
      state: "Yobe",
      gov: "Mai Mala Buni",
      id: 35,
      image: images.Yobe,
    },
    {
      state: "Zamfara",
      gov: "Bello Matawalle",
      id: 36,
      image: images.Zamfara,
    },
    {
      state: "FCT Abuja",
      gov: "Bello Mohammed",
      id: 37,
      image: images.Abuja,
    },
  ];

  const allministers = [
    {
      state: "Petroleum",
      gov: "Muhammadu Buhari",
      id: 1,
      image: ministerimages.petroleum,
    },
    {
      state: "FCT Abuja",
      gov: "Mohammed M. Bello",
      id: 2,
      image: ministerimages.fct,
    },
    {
      state: "Niger Delta",
      gov: "Godswill Akpabio",
      id: 3,
      image: ministerimages.niger_delta,
    },
    {
      state: "Labour/Empl.",
      gov: "Chris Ngige",
      id: 4,
      image: ministerimages.labour,
    },
    {
      state: "State, Environment",
      gov: "Sharon Ikeazor",
      id: 5,
      image: ministerimages.environment,
    },
    {
      state: "Minister of Education",
      gov: "Adamu Adamu",
      id: 6,
      image: ministerimages.education,
    },
    {
      state: "State Industry",
      gov: "Amb. Maryam Katagum",
      id: 7,
      image: ministerimages.industry,
    },
    {
      state: "State for Petroleum",
      gov: "Timipre Sylva ",
      id: 8,
      image: ministerimages.state_petroleum,
    },
    {
      state: "Special Duties",
      gov: "George Akume",
      id: 9,
      image: ministerimages.special_duties,
    },
    {
      state: "Agric/Rural Dev.",
      gov: "Mustapha Baba S.",
      id: 10,
      image: ministerimages.agric,
    },
    {
      state: "State, for Power",
      gov: "Goddy Jedy Agba",
      id: 11,
      image: ministerimages.state_power,
    },
    {
      state: "State, for Niger Delta",
      gov: "Festus Keyamo",
      id: 12,
      image: ministerimages.state_niger_delta,
    },
    {
      state: "Science and Technology",
      gov: "Ogbonnaya Onu",
      id: 13,
      image: ministerimages.science,
    },
    {
      state: "Minister of Health",
      gov: "Osagie Ehanire",
      id: 14,
      image: ministerimages.health,
    },
    {
      state: "Industry, Trade and Investment",
      gov: "Richard A. Adebayo",
      id: 16,
      image: ministerimages.industry,
    },
    {
      state: "Foreign Affairs",
      gov: "Geoffrey Onyeama",
      id: 17,
      image: ministerimages.foreign,
    },
    {
      state: "Communication",
      gov: "Ali Isa Pantami",
      id: 18,
      image: ministerimages.communication,
    },
    {
      state: "State for Education",
      gov: "Emeka Nwajiuba",
      id: 19,
      image: ministerimages.state_education,
    },
    {
      state: "Water Resources",
      gov: "Suleiman Adamu ",
      id: 20,
      image: ministerimages.water,
    },
    {
      state: "Finance",
      gov: "Zainab Ahmed",
      id: 21,
      image: ministerimages.finance,
    },
    {
      state: "Environment",
      gov: "Muhammad Mahmood",
      id: 22,
      image: ministerimages.environment,
    },
    // {
    //   state: "Agriculture and Rural Development",
    //   gov: "Sabo Nanono",
    //   id: 23,
    //   image: ministerimages.Kwara,
    // },
    {
      state: "Defence",
      gov: "Bashir Salihi Magashi",
      id: 24,
      image: ministerimages.defence,
    },
    {
      state: "Aviation",
      gov: "Hadi Sirika",
      id: 25,
      image: ministerimages.aviation,
    },
    {
      state: "Justice/A.G of the Federation",
      gov: "Abubakar Malami",
      id: 26,
      image: ministerimages.justice,
    },
    {
      state: "State, Federal Capital Territory (FCT)",
      gov: "Ramatu Tijjani",
      id: 27,
      image: ministerimages.state_fct,
    },
    {
      state: "Information and Culture",
      gov: "Lai Mohammed",
      id: 28,
      image: ministerimages.information,
    },
    {
      state: "State, Transportion",
      gov: "Gbemisola Saraki",
      id: 29,
      image: ministerimages.state_transportation,
    },
    {
      state: "Works and Housing",
      gov: "Babatunde Fashola",
      id: 30,
      image: ministerimages.works,
    },
    {
      state: "State for Health",
      gov: "Adeleke Mamora",
      id: 31,
      image: ministerimages.state_health,
    },
    {
      state: "State, Science and Technology",
      gov: "Mohammed H. A.",
      id: 32,
      image: ministerimages.state_science,
    },
    {
      state: "State, Foreign Affairs",
      gov: "Zubair Dada",
      id: 33,
      image: ministerimages.state_foreign,
    },
    {
      state: "Mines and Steel Development",
      gov: "Olamilekan Adegbite",
      id: 34,
      image: ministerimages.mines,
    },
    {
      state: "State, Labour and Employment",
      gov: "Tayo Alasoadura",
      id: 35,
      image: ministerimages.state_labour,
    },
    {
      state: "Interior",
      gov: "Rauf Aregbesola",
      id: 36,
      image: ministerimages.interior,
    },
    {
      state: "Youth and Sports",
      gov: " Sunday Dare",
      id: 37,
      image: ministerimages.youth,
    },
    {
      state: "Women Affairs",
      gov: "Paulen Tallen",
      id: 37,
      image: ministerimages.women,
    },
    {
      state: "Transportation",
      gov: "Rotimi Amaechi",
      id: 37,
      image: ministerimages.transport,
    },
    {
      state: "Police Affairs",
      gov: "Maigari Dingyadi",
      id: 37,
      image: ministerimages.police,
    },
    {
      state: "Power",
      gov: " Sale Mamman",
      id: 37,
      image: ministerimages.power,
    },
    {
      state: "State, Works and Housing",
      gov: "Abubakar D. Aliyu",
      id: 37,
      image: ministerimages.state_works,
    },
    {
      state: "Humanitarian Affairs, Disaster Management",
      gov: " Sadiya Umar Faruk",
      id: 37,
      image: ministerimages.humaniterian,
    },
    {
      state: "State Mines and Steel",
      gov: " Dr. Ikechukwu Ogah",
      id: 37,
      image: ministerimages.state_mines,
    },
  ];

  const all_lga = [
    {
      state: "Abia",
      label: " Aba North",
      id: 1,
    },
    {
      state: " Abia",
      label: " Arochukwu ",
      id: 2,
    },
    {
      state: " Abia",
      label: "Aba South",
      id: 3,
    },
    {
      state: " Abia",
      label: "Bende",
      id: 4,
    },
    {
      state: "Abia ",
      label: "Isiala Ngwa North",
      id: 5,
    },
    {
      state: "Abia ",
      label: "Ikwuano",
      id: 6,
    },
    {
      state: " Abia",
      label: "Isiala Ngwa South",
      id: 7,
    },
    {
      state: " Abia",
      label: "Isuikwuato",
      id: 8,
    },
    {
      state: " Abia",
      label: "Obi Ngwa",
      id: 9,
    },
    {
      state: " Abia",
      label: "Ohafia",
      id: 10,
    },
    {
      state: "Abia ",
      label: "Osisioma",
      id: 11,
    },
    {
      state: " Abia",
      label: "Ugwunagbo",
      id: 12,
    },
    {
      state: " Abia",
      label: "Ukwa East",
      id: 13,
    },
    {
      state: " Abia",
      label: "Ukwa West",
      id: 14,
    },
    {
      state: "Abia ",
      label: "Umuahia North",
      id: 15,
    },
    {
      state: " Abia",
      label: "Umuahia South",
      id: 16,
    },
    {
      state: "Abia ",
      label: "Umu Nneochi",
      id: 17,
    },
    {
      state: "Adamawa",
      label: " Demsa",
      id: 18,
    },
    {
      state: " Adamawa",
      label: " Fufure",
      id: 19,
    },
    {
      state: " Adamawa",
      label: " Ganye",
      id: 20,
    },
    {
      state: " Adamawa",
      label: "Gayuk ",
      id: 21,
    },
    {
      state: " Adamawa",
      label: "Gombi ",
      id: 22,
    },
    {
      state: " Adamawa",
      label: " Grie",
      id: 23,
    },
    {
      state: " Adamawa",
      label: " Hong",
      id: 24,
    },
    {
      state: "Adamawa ",
      label: " Jada",
      id: 25,
    },
    {
      state: " Adamawa",
      label: " Larmurde",
      id: 26,
    },
    {
      state: " Adamawa",
      label: " Madagali",
      id: 27,
    },
    {
      state: "Adamawa ",
      label: " Maiha",
      id: 28,
    },
    {
      state: " Adamawa",
      label: "Mayo Belwa",
      id: 29,
    },
    {
      state: " Adamawa",
      label: " Michika",
      id: 30,
    },
    {
      state: " Adamawa",
      label: "Mubi North ",
      id: 31,
    },
    {
      state: "Adamawa ",
      label: " Mubi South",
      id: 32,
    },
    {
      state: " Adamawa",
      label: "Numan",
      id: 33,
    },
    {
      state: "Adamawa ",
      label: " Shelleng",
      id: 34,
    },
    {
      state: " Adamawa",
      label: "Song ",
      id: 35,
    },
    {
      state: " Adamawa",
      label: " Toungo",
      id: 36,
    },
    {
      state: " Adamawa",
      label: " Yola North",
      id: 37,
    },
    {
      state: " Adamawa",
      label: " Yola South",
      id: 38,
    },
    {
      state: " Akwa Ibom",
      label: "Abak ",
      id: 39,
    },
    {
      state: " Akwa Ibom",
      label: " Eastern Obolo",
      id: 40,
    },
    {
      state: " Akwa Ibom",
      label: " Eket",
      id: 41,
    },
    {
      state: " Akwa Ibom",
      label: " Esit Eket",
      id: 42,
    },
    {
      state: "Akwa Ibom ",
      label: " Essien Udim",
      id: 43,
    },
    {
      state: "Akwa Ibom ",
      label: "Etim Ekpo ",
      id: 44,
    },
    {
      state: " Akwa Ibom",
      label: " Etinan",
      id: 45,
    },
    {
      state: " Akwa Ibom",
      label: " Ibeno",
      id: 46,
    },
    {
      state: "Akwa Ibom ",
      label: "Ibesikpo Asutan ",
      id: 47,
    },
    {
      state: " Akwa Ibom",
      label: " Ibiono-Ibom",
      id: 48,
    },
    {
      state: " Akwa Ibom",
      label: "Ikot Abasi ",
      id: 49,
    },
    {
      state: " Akwa Ibom",
      label: " Ika",
      id: 50,
    },
    {
      state: " Akwa Ibom",
      label: "Ikono ",
      id: 51,
    },
    {
      state: "Akwa Ibom ",
      label: " Ikot Ekpene",
      id: 52,
    },
    {
      state: "Akwa Ibom ",
      label: " Ini",
      id: 53,
    },
    {
      state: "Akwa Ibom ",
      label: "Mkpat-Enin ",
      id: 54,
    },
    {
      state: "Akwa Ibom ",
      label: "Itu ",
      id: 55,
    },
    {
      state: "Akwa Ibom ",
      label: "Mbo ",
      id: 56,
    },
    {
      state: "Akwa Ibom ",
      label: "Nsit-Atai ",
      id: 57,
    },
    {
      state: "Akwa Ibom ",
      label: " Nsit-Ibom",
      id: 58,
    },
    {
      state: " Akwa Ibom",
      label: " Nsit-Ubium",
      id: 59,
    },
    {
      state: " Akwa Ibom",
      label: " Obot Akara",
      id: 60,
    },
    {
      state: " Akwa Ibom",
      label: "Okobo ",
      id: 61,
    },
    {
      state: " Akwa Ibom",
      label: " Onna",
      id: 62,
    },
    {
      state: "Akwa Ibom ",
      label: "Oron ",
      id: 63,
    },
    {
      state: "Akwa Ibom ",
      label: " Udung-Uko",
      id: 64,
    },
    {
      state: " Akwa Ibom",
      label: " Ukanafun",
      id: 65,
    },
    {
      state: " Akwa Ibom",
      label: " Oruk Anam",
      id: 66,
    },
    {
      state: "Akwa Ibom ",
      label: " Uruan",
      id: 67,
    },
    {
      state: "Akwa Ibom ",
      label: " Urue-Offong/Oruko",
      id: 68,
    },
    {
      state: " Akwa Ibom",
      label: "Uyo ",
      id: 69,
    },
    {
      state: " Anambra",
      label: " Aguata",
      id: 70,
    },
    {
      state: " Anambra",
      label: " Anambra East",
      id: 71,
    },
    {
      state: " Anambra",
      label: " Anaocha",
      id: 72,
    },
    {
      state: " Anambra",
      label: "Awka North ",
      id: 73,
    },
    {
      state: " Anambra",
      label: "Anambra West ",
      id: 74,
    },
    {
      state: " Anambra",
      label: "Awka South ",
      id: 75,
    },
    {
      state: " Anambra",
      label: "Ayamelum ",
      id: 76,
    },
    {
      state: " Anambra",
      label: " Dunukofia",
      id: 77,
    },
    {
      state: "Anambra ",
      label: " Ekwusigo",
      id: 78,
    },
    {
      state: "Anambra ",
      label: "Idemili North ",
      id: 79,
    },
    {
      state: " Anambra",
      label: " Idemili South",
      id: 80,
    },
    {
      state: " Anambra",
      label: "Ihiala ",
      id: 81,
    },
    {
      state: " Anambra",
      label: "Njikoka ",
      id: 82,
    },
    {
      state: " Anambra",
      label: " Nnewi North",
      id: 83,
    },
    {
      state: " Anambra",
      label: "Nnewi South ",
      id: 84,
    },
    {
      state: " Anambra",
      label: "Ogbaru ",
      id: 85,
    },
    {
      state: " Anambra",
      label: "Onitsha North ",
      id: 86,
    },
    {
      state: " Anambra",
      label: " Onitsha South",
      id: 87,
    },
    {
      state: " Anambra",
      label: " Orumba North",
      id: 88,
    },
    {
      state: " Anambra",
      label: " Orumba South",
      id: 89,
    },
    {
      state: " Anambra",
      label: " Oyi",
      id: 90,
    },
    {
      state: " Ogun",
      label: " Abeokuta North",
      id: 91,
    },
    {
      state: " Ogun",
      label: " Abeokuta South",
      id: 92,
    },
    {
      state: " Ogun",
      label: "Ado-Odo/Ota ",
      id: 93,
    },
    {
      state: "Ogun ",
      label: "Egbado North ",
      id: 94,
    },
    {
      state: " Ogun",
      label: " Ewekoro",
      id: 95,
    },
    {
      state: " Ogun",
      label: "Egbado South ",
      id: 96,
    },
    {
      state: " Ogun",
      label: " Ijebu North",
      id: 97,
    },
    {
      state: "Ogun ",
      label: " Ijebu East",
      id: 98,
    },
    {
      state: "Ogun ",
      label: " Ifo",
      id: 99,
    },
    {
      state: "Ogun ",
      label: "Ijebu Ode ",
      id: 100,
    },
    {
      state: " Ogun",
      label: "Ijebu North East ",
      id: 101,
    },
    {
      state: " Ogun",
      label: " Imeko Afon",
      id: 102,
    },
    {
      state: " Ogun",
      label: " Ikenne",
      id: 103,
    },
    {
      state: " Ogun",
      label: "Ipokia ",
      id: 104,
    },
    {
      state: " Ogun",
      label: "Odeda ",
      id: 105,
    },
    {
      state: "Ogun ",
      label: " Obafemi Owode",
      id: 106,
    },
    {
      state: "Ogun ",
      label: "Odogbolu ",
      id: 107,
    },
    {
      state: " Ogun",
      label: " Remo North",
      id: 108,
    },
    {
      state: " Ogun",
      label: " Ogun Waterside",
      id: 109,
    },
    {
      state: " Ogun",
      label: " Shagamu",
      id: 110,
    },
    {
      state: " Ondo",
      label: "Akoko North-East ",
      id: 111,
    },
    {
      state: "Ondo ",
      label: "Akoko North-West ",
      id: 112,
    },
    {
      state: "Ondo ",
      label: "Akoko South-West ",
      id: 113,
    },
    {
      state: "Ondo ",
      label: " Akoko South-East",
      id: 114,
    },
    {
      state: "Ondo ",
      label: "Akure North ",
      id: 115,
    },
    {
      state: "Ondo ",
      label: "Akure South ",
      id: 116,
    },
    {
      state: " Ondo",
      label: " Ese Odo",
      id: 117,
    },
    {
      state: "Ondo ",
      label: "Idanre ",
      id: 118,
    },
    {
      state: "Ondo ",
      label: " Ifedore",
      id: 119,
    },
    {
      state: "Ondo ",
      label: " Ilaje",
      id: 120,
    },
    {
      state: " Ondo",
      label: " Irele",
      id: 121,
    },
    {
      state: "Ondo ",
      label: " Ile Oluji/Okeigbo",
      id: 122,
    },
    {
      state: " Ondo",
      label: " Odigbo",
      id: 123,
    },
    {
      state: "Ondo ",
      label: " Okitipupa",
      id: 124,
    },
    {
      state: "Ondo ",
      label: "Ondo West ",
      id: 125,
    },
    {
      state: "Ondo ",
      label: "Ose ",
      id: 126,
    },
    {
      state: " Ondo",
      label: "Ondo East ",
      id: 127,
    },
    {
      state: "Ondo ",
      label: "Owo ",
      id: 128,
    },
    {
      state: " Rivers",
      label: " Abua/Odual",
      id: 129,
    },
    {
      state: "Rivers ",
      label: " Ahoada East",
      id: 130,
    },
    {
      state: "Rivers ",
      label: " Ahoada West",
      id: 131,
    },
    {
      state: "Rivers ",
      label: "Andoni ",
      id: 132,
    },
    {
      state: "Rivers ",
      label: " Akuku-Toru",
      id: 133,
    },
    {
      state: " Rivers",
      label: "Asari-Toru ",
      id: 134,
    },
    {
      state: " Rivers",
      label: " Bonny",
      id: 135,
    },
    {
      state: "Rivers ",
      label: " Degema",
      id: 136,
    },
    {
      state: "Rivers ",
      label: "Emuoha ",
      id: 137,
    },
    {
      state: "Rivers ",
      label: " Eleme",
      id: 138,
    },
    {
      state: "Rivers ",
      label: " Ikwerre",
      id: 139,
    },
    {
      state: " Rivers",
      label: "Etche ",
      id: 140,
    },
    {
      state: "Rivers ",
      label: " Gokana",
      id: 141,
    },
    {
      state: "Rivers ",
      label: " Khana",
      id: 142,
    },
    {
      state: " Rivers",
      label: " Obio/Akpor",
      id: 143,
    },
    {
      state: "Rivers ",
      label: " Ogba / Egbema / Ndoni",
      id: 144,
    },
    {
      state: "Rivers ",
      label: " Ogu/Bolo",
      id: 145,
    },
    {
      state: "Rivers ",
      label: " Okrika",
      id: 146,
    },
    {
      state: "Rivers ",
      label: " Omuma",
      id: 147,
    },
    {
      state: "Rivers ",
      label: " Opobo/Nkoro",
      id: 148,
    },
    {
      state: "Rivers ",
      label: " Oyigbo",
      id: 149,
    },
    {
      state: " Rivers",
      label: "Port Harcourt",
      id: 150,
    },
    {
      state: " Rivers",
      label: " Tai",
      id: 151,
    },
    {
      state: " Bauchi",
      label: " Alkaleri",
      id: 152,
    },
    {
      state: " Bauchi",
      label: "Bauchi ",
      id: 153,
    },
    {
      state: " Bauchi",
      label: "Bogoro    ",
      id: 154,
    },
    {
      state: "Bauchi ",
      label: "Damban ",
      id: 155,
    },
    {
      state: "Bauchi ",
      label: " Darazo",
      id: 156,
    },
    {
      state: "Bauchi ",
      label: " Dass",
      id: 157,
    },
    {
      state: "Bauchi ",
      label: "Gamawa ",
      id: 158,
    },
    {
      state: " Bauchi",
      label: "Ganjuwa ",
      id: 159,
    },
    {
      state: " Bauchi",
      label: " Giade",
      id: 160,
    },
    {
      state: " Bauchi",
      label: " Itas/Gadau",
      id: 161,
    },
    {
      state: " Bauchi",
      label: "Jama'are ",
      id: 162,
    },
    {
      state: " Bauchi",
      label: " Katagum",
      id: 163,
    },
    {
      state: "Bauchi ",
      label: " Kirfi",
      id: 164,
    },
    {
      state: "Bauchi ",
      label: " Misau",
      id: 165,
    },
    {
      state: "Bauchi ",
      label: " Shira",
      id: 166,
    },
    {
      state: "Bauchi ",
      label: "Tafawa Balewa ",
      id: 167,
    },
    {
      state: "Bauchi ",
      label: " Toro",
      id: 168,
    },
    {
      state: " Bauchi",
      label: " Warji",
      id: 169,
    },
    {
      state: "Bauchi ",
      label: "Zaki ",
      id: 170,
    },
    {
      state: "Benue ",
      label: " Agatu",
      id: 171,
    },
    {
      state: " Benue",
      label: "Apa ",
      id: 172,
    },
    {
      state: "Benue ",
      label: " Ado",
      id: 173,
    },
    {
      state: "Benue ",
      label: " Buruku",
      id: 174,
    },
    {
      state: "Benue ",
      label: "Gboko ",
      id: 175,
    },
    {
      state: " Benue",
      label: " Guma",
      id: 176,
    },
    {
      state: "Benue ",
      label: "Gwer East ",
      id: 177,
    },
    {
      state: " Benue",
      label: " Gwer West",
      id: 178,
    },
    {
      state: " Benue",
      label: "Katsina-Ala ",
      id: 179,
    },
    {
      state: "Benue ",
      label: "Konshisha ",
      id: 180,
    },
    {
      state: "Benue ",
      label: "Kwande ",
      id: 181,
    },
    {
      state: "Benue ",
      label: "Logo ",
      id: 182,
    },
    {
      state: " Benue",
      label: " Makurdi",
      id: 183,
    },
    {
      state: "Benue ",
      label: "Obi ",
      id: 184,
    },
    {
      state: "Benue ",
      label: " Ogbadibo",
      id: 185,
    },
    {
      state: "Benue ",
      label: "Ohimini ",
      id: 186,
    },
    {
      state: " Benue",
      label: "Oju ",
      id: 187,
    },
    {
      state: " Benue",
      label: "Okpokwu ",
      id: 188,
    },
    {
      state: " Benue",
      label: "Oturkpo ",
      id: 189,
    },
    {
      state: "Benue ",
      label: " Tarka",
      id: 190,
    },
    {
      state: "Benue ",
      label: " Ukum",
      id: 191,
    },
    {
      state: "Benue ",
      label: " Ushongo",
      id: 192,
    },
    {
      state: " Benue",
      label: "Vandeikya ",
      id: 193,
    },
    {
      state: " Borno",
      label: " Abadam",
      id: 194,
    },
    {
      state: " Borno",
      label: " Askira/Uba",
      id: 195,
    },
    {
      state: "Borno ",
      label: " Bama",
      id: 196,
    },
    {
      state: " Borno",
      label: " Bayo",
      id: 197,
    },
    {
      state: " Borno",
      label: " Biu",
      id: 198,
    },
    {
      state: "Borno ",
      label: " Chibok",
      id: 199,
    },
    {
      state: "Borno ",
      label: "Damboa ",
      id: 200,
    },
    {
      state: " Borno",
      label: "Dikwa ",
      id: 201,
    },
    {
      state: "Borno ",
      label: "Guzamala ",
      id: 202,
    },
    {
      state: "Borno ",
      label: "Gubio ",
      id: 203,
    },
    {
      state: "Borno ",
      label: "Hawul ",
      id: 204,
    },
    {
      state: "Borno ",
      label: "Gwoza ",
      id: 205,
    },
    {
      state: "Borno ",
      label: "Jere ",
      id: 206,
    },
    {
      state: "Borno ",
      label: "Kaga ",
      id: 207,
    },
    {
      state: "Borno ",
      label: "Kala/Balabel ",
      id: 208,
    },
    {
      state: "Borno ",
      label: "Konduga ",
      id: 209,
    },
    {
      state: "Borno ",
      label: " Kukawa",
      id: 210,
    },
    {
      state: "Borno ",
      label: "Kwaya Kusar ",
      id: 211,
    },
    {
      state: "Borno ",
      label: "Mafa ",
      id: 212,
    },
    {
      state: "Borno ",
      label: "Magumeri ",
      id: 213,
    },
    {
      state: " Borno",
      label: " Maiduguri",
      id: 214,
    },
    {
      state: "Borno ",
      label: "Mobbar ",
      id: 215,
    },
    {
      state: "Borno ",
      label: "Marte ",
      id: 216,
    },
    {
      state: "Borno ",
      label: " Monguno",
      id: 217,
    },
    {
      state: " Borno",
      label: " Ngala",
      id: 218,
    },
    {
      state: "Borno ",
      label: " Nganzai",
      id: 219,
    },
    {
      state: " Borno",
      label: "Shani ",
      id: 220,
    },
    {
      state: " Bayelsa",
      label: " Brass",
      id: 221,
    },
    {
      state: " Bayelsa",
      label: " Ekeremor",
      id: 222,
    },
    {
      state: "Bayelsa ",
      label: " Kolokuma/Opokuma",
      id: 223,
    },
    {
      state: " Bayelsa",
      label: " Nembe",
      id: 224,
    },
    {
      state: " Bayelsa",
      label: "Ogbia ",
      id: 225,
    },
    {
      state: "Bayelsa ",
      label: "Sagbama ",
      id: 226,
    },
    {
      state: " Bayelsa",
      label: " Southern Ijaw",
      id: 227,
    },
    {
      state: "Bayelsa ",
      label: " Yenagoa",
      id: 228,
    },
    {
      state: " Cross River",
      label: " Abi",
      id: 229,
    },
    {
      state: " Cross River",
      label: " Akamkpa",
      id: 230,
    },
    {
      state: " Cross River",
      label: " Akpabuyo",
      id: 231,
    },
    {
      state: "Cross River ",
      label: " Bakassi",
      id: 232,
    },
    {
      state: " Cross River",
      label: "Bekwarra ",
      id: 233,
    },
    {
      state: " Cross River",
      label: "Biase ",
      id: 234,
    },
    {
      state: "Cross River ",
      label: " Boki",
      id: 235,
    },
    {
      state: " Cross River",
      label: " Calabar Municipal",
      id: 236,
    },
    {
      state: " Cross River",
      label: "Calabar South ",
      id: 237,
    },
    {
      state: "Cross River ",
      label: "Etung ",
      id: 238,
    },
    {
      state: " Cross River",
      label: " Ikom",
      id: 239,
    },
    {
      state: "Cross River ",
      label: " Obanliku",
      id: 240,
    },
    {
      state: " Cross River",
      label: "Obubra ",
      id: 241,
    },
    {
      state: " Cross River",
      label: " Obudu",
      id: 242,
    },
    {
      state: " Cross River",
      label: "Odukpani ",
      id: 243,
    },
    {
      state: " Cross River",
      label: " Ogoja",
      id: 244,
    },
    {
      state: "Cross River ",
      label: " Yakuur",
      id: 245,
    },
    {
      state: " Cross River",
      label: "Yala ",
      id: 246,
    },
    {
      state: " Delta",
      label: " Aniocha North",
      id: 247,
    },
    {
      state: "Delta ",
      label: " Aniocha South",
      id: 248,
    },
    {
      state: " Delta",
      label: " Bomadi",
      id: 249,
    },
    {
      state: " Delta",
      label: " Burutu",
      id: 250,
    },
    {
      state: "Delta ",
      label: " Ethiope West",
      id: 251,
    },
    {
      state: "Delta ",
      label: " Ethiope East",
      id: 252,
    },
    {
      state: "Delta ",
      label: "Ika North East ",
      id: 253,
    },
    {
      state: "Delta ",
      label: " Ika South",
      id: 254,
    },
    {
      state: " Delta",
      label: " Isoko North",
      id: 255,
    },
    {
      state: "Delta ",
      label: "Isoko South ",
      id: 256,
    },
    {
      state: " Delta",
      label: "Ndokwa East ",
      id: 257,
    },
    {
      state: "Delta ",
      label: " Ndokwa West",
      id: 258,
    },
    {
      state: "Delta",
      label: " Okpe",
      id: 259,
    },
    {
      state: " Delta",
      label: "Oshimili North ",
      id: 260,
    },
    {
      state: "Delta ",
      label: "Oshimili South ",
      id: 261,
    },
    {
      state: "Delta ",
      label: "Patani ",
      id: 262,
    },
    {
      state: "Delta ",
      label: "Sapele ",
      id: 263,
    },
    {
      state: "Delta ",
      label: " Udu",
      id: 264,
    },
    {
      state: "Delta ",
      label: "Ughelli North ",
      id: 265,
    },
    {
      state: "Delta ",
      label: " Ukwuani",
      id: 266,
    },
    {
      state: "Delta ",
      label: " Ughelli South",
      id: 267,
    },
    {
      state: " Delta",
      label: "Uvwie ",
      id: 268,
    },
    {
      state: " Delta",
      label: "Warri North ",
      id: 269,
    },
    {
      state: "Delta ",
      label: " Warri South",
      id: 270,
    },
    {
      state: "Delta ",
      label: "Warri South West ",
      id: 271,
    },
    {
      state: "Ebonyi ",
      label: "Abakaliki ",
      id: 272,
    },
    {
      state: " Ebonyi",
      label: " Afikpo North",
      id: 273,
    },
    {
      state: " Ebonyi",
      label: " Ebonyi",
      id: 274,
    },
    {
      state: "Ebonyi ",
      label: " Afikpo South",
      id: 275,
    },
    {
      state: " Ebonyi",
      label: "Ezza North ",
      id: 276,
    },
    {
      state: " Ebonyi",
      label: "Ikwo ",
      id: 277,
    },
    {
      state: " Ebonyi",
      label: "Ezza South ",
      id: 278,
    },
    {
      state: "Ebonyi ",
      label: " Ivo",
      id: 279,
    },
    {
      state: "Ebonyi ",
      label: "Ishielu ",
      id: 280,
    },
    {
      state: "Ebonyi ",
      label: "Izzi ",
      id: 281,
    },
    {
      state: " Ebonyi",
      label: " Ohaozara",
      id: 282,
    },
    {
      state: " Ebonyi",
      label: "Ohaukwu ",
      id: 283,
    },
    {
      state: " Ebonyi",
      label: " Onicha",
      id: 284,
    },
    {
      state: " Edo",
      label: "Akoko-Edo ",
      id: 285,
    },
    {
      state: "Edo ",
      label: "Egor ",
      id: 286,
    },
    {
      state: "Edo ",
      label: "Esan Central ",
      id: 287,
    },
    {
      state: "Edo ",
      label: "Esan North-East ",
      id: 288,
    },
    {
      state: " Edo",
      label: " Esan South-East",
      id: 289,
    },
    {
      state: "Edo ",
      label: " Esan West",
      id: 290,
    },
    {
      state: "Edo ",
      label: "Etsako Central ",
      id: 291,
    },
    {
      state: " Edo",
      label: " Etsako East",
      id: 292,
    },
    {
      state: "Edo ",
      label: " Etsako West",
      id: 293,
    },
    {
      state: "Edo ",
      label: " Igueben",
      id: 294,
    },
    {
      state: " Edo",
      label: " Ikpoba Okha",
      id: 295,
    },
    {
      state: " Edo",
      label: "Orhionmwon ",
      id: 296,
    },
    {
      state: " Edo",
      label: " Oredo",
      id: 297,
    },
    {
      state: "Edo ",
      label: "Ovia North-East ",
      id: 298,
    },
    {
      state: " Edo",
      label: " Ovia South-West",
      id: 299,
    },
    {
      state: "Edo ",
      label: " Owan East",
      id: 300,
    },
    {
      state: "Edo ",
      label: " Owan West",
      id: 301,
    },
    {
      state: " Edo",
      label: "Uhunmwonde ",
      id: 302,
    },
    {
      state: "Ekiti ",
      label: " Ado Ekiti",
      id: 303,
    },
    {
      state: "Ekiti ",
      label: " Efon",
      id: 304,
    },
    {
      state: "Ekiti ",
      label: " Ekiti East",
      id: 305,
    },
    {
      state: "Ekiti ",
      label: " Ekiti South-West",
      id: 306,
    },
    {
      state: "Ekiti ",
      label: "Ekiti West ",
      id: 307,
    },
    {
      state: "Ekiti ",
      label: " Emure",
      id: 308,
    },
    {
      state: " Ekiti",
      label: " Gbonyin",
      id: 309,
    },
    {
      state: "Ekiti ",
      label: "Ido Osi ",
      id: 310,
    },
    {
      state: "Ekiti ",
      label: " Ijero",
      id: 311,
    },
    {
      state: " Ekiti",
      label: "Ikere ",
      id: 312,
    },
    {
      state: " Ekiti",
      label: "Ilejemeje ",
      id: 313,
    },
    {
      state: " Ekiti",
      label: "Irepodun/Ifelodun ",
      id: 314,
    },
    {
      state: "Ekiti ",
      label: " Ikole",
      id: 315,
    },
    {
      state: " Ekiti",
      label: " Ise/Orun",
      id: 316,
    },
    {
      state: "Ekiti ",
      label: " Moba",
      id: 317,
    },
    {
      state: "Ekiti ",
      label: "Oye ",
      id: 318,
    },
    {
      state: " Enugu",
      label: "Awgu ",
      id: 319,
    },
    {
      state: "Enugu ",
      label: "Aninri ",
      id: 320,
    },
    {
      state: " Enugu",
      label: " Enugu East",
      id: 321,
    },
    {
      state: " Enugu",
      label: " Enugu North",
      id: 322,
    },
    {
      state: " Enugu",
      label: " Ezeagu",
      id: 323,
    },
    {
      state: " Enugu",
      label: " Enugu South",
      id: 324,
    },
    {
      state: " Enugu",
      label: " Igbo Etiti",
      id: 325,
    },
    {
      state: " Enugu",
      label: " Igbo Eze North",
      id: 326,
    },
    {
      state: " Enugu",
      label: " Igbo Eze South",
      id: 327,
    },
    {
      state: " Enugu",
      label: " Isi Uzo",
      id: 328,
    },
    {
      state: "Enugu ",
      label: " Nkanu East",
      id: 329,
    },
    {
      state: " Enugu",
      label: " Nkanu West",
      id: 330,
    },
    {
      state: " Enugu",
      label: " Nsukka",
      id: 331,
    },
    {
      state: "Enugu ",
      label: "Udenu ",
      id: 332,
    },
    {
      state: "Enugu ",
      label: " Oji River",
      id: 333,
    },
    {
      state: " Enugu",
      label: " Uzo Uwani",
      id: 334,
    },
    {
      state: "Enugu ",
      label: " Udi",
      id: 335,
    },
    {
      state: " Abuja",
      label: "Abaji ",
      id: 336,
    },
    {
      state: " Abuja",
      label: " Bwari",
      id: 337,
    },
    {
      state: " Abuja",
      label: " Gwagwalada",
      id: 338,
    },
    {
      state: "Abuja ",
      label: " Kuje",
      id: 339,
    },
    {
      state: " Abuja",
      label: "Kwali ",
      id: 340,
    },
    {
      state: " Abuja",
      label: "Municipal Area Council ",
      id: 341,
    },
    {
      state: "Gombe ",
      label: " Akko",
      id: 342,
    },
    {
      state: " Gombe",
      label: "Balanga ",
      id: 343,
    },
    {
      state: " Gombe",
      label: "Billiri ",
      id: 344,
    },
    {
      state: " Gombe",
      label: "Dukku ",
      id: 345,
    },
    {
      state: "Gombe ",
      label: "Funakaye ",
      id: 346,
    },
    {
      state: "Gombe ",
      label: " Gombe",
      id: 247,
    },
    {
      state: "Gombe ",
      label: " Kaltungo",
      id: 348,
    },
    {
      state: " Gombe",
      label: " Kwami",
      id: 349,
    },
    {
      state: " Gombe",
      label: " Nafada",
      id: 350,
    },
    {
      state: " Gombe",
      label: "Shongom ",
      id: 351,
    },
    {
      state: "Gombe ",
      label: " Yamaltu/Deba",
      id: 352,
    },
    {
      state: " Jigawa",
      label: " ",
      id: 353,
    },
    {
      state: " Jigawa",
      label: " Auyo",
      id: 354,
    },
    {
      state: "Jigawa ",
      label: "Babura ",
      id: 355,
    },
    {
      state: "Jigawa ",
      label: " Buji",
      id: 356,
    },
    {
      state: "Jigawa ",
      label: " Biriniwa",
      id: 357,
    },
    {
      state: "Jigawa ",
      label: "Birnin Kudu ",
      id: 358,
    },
    {
      state: "Jigawa ",
      label: " Dutse",
      id: 359,
    },
    {
      state: "Jigawa ",
      label: " Gagarawa",
      id: 360,
    },
    {
      state: " Jigawa",
      label: " Garki",
      id: 361,
    },
    {
      state: " Jigawa",
      label: "Gumel ",
      id: 362,
    },
    {
      state: " Jigawa",
      label: "Guri ",
      id: 363,
    },
    {
      state: "Jigawa ",
      label: "Gwaram ",
      id: 364,
    },
    {
      state: " Jigawa",
      label: "Gwiwa ",
      id: 365,
    },
    {
      state: " Jigawa",
      label: " Hadejia",
      id: 366,
    },
    {
      state: " Jigawa",
      label: " Jahun",
      id: 367,
    },
    {
      state: " Jigawa",
      label: "Kafin Hausa ",
      id: 368,
    },
    {
      state: " Jigawa",
      label: "Kazaure ",
      id: 369,
    },
    {
      state: " Jigawa",
      label: "Kiri Kasama ",
      id: 370,
    },
    {
      state: " Jigawa",
      label: " Kiyawa",
      id: 371,
    },
    {
      state: " Jigawa",
      label: " Kaugama",
      id: 372,
    },
    {
      state: " Jigawa",
      label: "Maigatari ",
      id: 373,
    },
    {
      state: " Jigawa",
      label: " Malam Madori",
      id: 374,
    },
    {
      state: "Jigawa ",
      label: " Miga",
      id: 375,
    },
    {
      state: "Jigawa ",
      label: " Sule Tankarkar",
      id: 376,
    },
    {
      state: "Jigawa ",
      label: "Roni ",
      id: 377,
    },
    {
      state: "Jigawa ",
      label: " Ringim",
      id: 378,
    },
    {
      state: "Jigawa ",
      label: " Yankwashi",
      id: 379,
    },
    {
      state: " Jigawa",
      label: " Taura",
      id: 380,
    },
    {
      state: "Oyo ",
      label: " Afijio",
      id: 381,
    },
    {
      state: "Oyo ",
      label: "Akinyele ",
      id: 382,
    },
    {
      state: "Oyo ",
      label: "Atiba ",
      id: 383,
    },
    {
      state: "Oyo ",
      label: "Atisbo ",
      id: 384,
    },
    {
      state: "Oyo ",
      label: " Egbeda",
      id: 385,
    },
    {
      state: "Oyo ",
      label: " Ibadan North",
      id: 386,
    },
    {
      state: "Oyo ",
      label: " Ibadan North-East",
      id: 387,
    },
    {
      state: "Oyo ",
      label: "Ibadan North-West ",
      id: 388,
    },
    {
      state: "Oyo ",
      label: " Ibadan South-East",
      id: 389,
    },
    {
      state: "Oyo ",
      label: "Ibarapa Central ",
      id: 390,
    },
    {
      state: "Oyo ",
      label: " Ibadan South-West",
      id: 391,
    },
    {
      state: "Oyo ",
      label: " Ibarapa East  ",
      id: 392,
    },
    {
      state: "Oyo ",
      label: " Ido",
      id: 393,
    },
    {
      state: " Oyo",
      label: " Ibarapa North",
      id: 394,
    },
    {
      state: "Oyo ",
      label: " Irepo",
      id: 395,
    },
    {
      state: "Oyo ",
      label: " Iseyin",
      id: 396,
    },
    {
      state: "Oyo ",
      label: "Itesiwaju ",
      id: 397,
    },
    {
      state: "Oyo ",
      label: " Iwajowa",
      id: 398,
    },
    {
      state: " Oyo",
      label: " Kajola",
      id: 399,
    },
    {
      state: "Oyo ",
      label: " Lagelu",
      id: 400,
    },
    {
      state: "Oyo ",
      label: " Ogbomosho North",
      id: 401,
    },
    {
      state: "Oyo ",
      label: " Ogbomosho South",
      id: 402,
    },
    {
      state: "Oyo ",
      label: "Ogo Oluwa ",
      id: 403,
    },
    {
      state: " Oyo",
      label: "Olorunsogo ",
      id: 404,
    },
    {
      state: "Oyo ",
      label: "Oluyole ",
      id: 405,
    },
    {
      state: "Oyo ",
      label: " Ona Ara",
      id: 406,
    },
    {
      state: " Oyo",
      label: " Orelope",
      id: 407,
    },
    {
      state: "Oyo ",
      label: " Ori Ire",
      id: 408,
    },
    {
      state: "Oyo ",
      label: " Oyo",
      id: 409,
    },
    {
      state: "Oyo ",
      label: " Oyo East",
      id: 410,
    },
    {
      state: "Oyo ",
      label: "Saki East ",
      id: 411,
    },
    {
      state: " Oyo",
      label: "Saki West ",
      id: 412,
    },
    {
      state: " Oyo",
      label: " Surulere Oyo State",
      id: 413,
    },
    {
      state: " Aboh Mbaise",
      label: " Aboh Mbaise",
      id: 414,
    },
    {
      state: " Aboh Mbaise",
      label: "Ahiazu Mbaise ",
      id: 415,
    },
    {
      state: "Aboh Mbaise ",
      label: " Ehime Mbano",
      id: 416,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ezinihitte ",
      id: 417,
    },
    {
      state: "Aboh Mbaise ",
      label: " Ideato North",
      id: 418,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ideato South ",
      id: 419,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ihitte/Uboma ",
      id: 420,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ikeduru ",
      id: 421,
    },
    {
      state: "Aboh Mbaise ",
      label: " Isiala Mbano",
      id: 422,
    },
    {
      state: "Aboh Mbaise ",
      label: " Mbaitoli",
      id: 423,
    },
    {
      state: "Aboh Mbaise ",
      label: "Isu ",
      id: 424,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ngor Okpala ",
      id: 425,
    },
    {
      state: "Aboh Mbaise ",
      label: "Njaba ",
      id: 426,
    },
    {
      state: "Aboh Mbaise ",
      label: " Nkwerre",
      id: 427,
    },
    {
      state: "Aboh Mbaise ",
      label: "Nwangele ",
      id: 428,
    },
    {
      state: "Aboh Mbaise ",
      label: " Obowo",
      id: 429,
    },
    {
      state: "Aboh Mbaise ",
      label: " Oguta",
      id: 430,
    },
    {
      state: "Aboh Mbaise ",
      label: "Ohaji/Egbema ",
      id: 431,
    },
    {
      state: "Aboh Mbaise ",
      label: " Okigwe",
      id: 432,
    },
    {
      state: "Aboh Mbaise ",
      label: "Orlu ",
      id: 433,
    },
    {
      state: "Aboh Mbaise ",
      label: "Orsu ",
      id: 434,
    },
    {
      state: "Aboh Mbaise ",
      label: " Oru East",
      id: 435,
    },
    {
      state: "Aboh Mbaise ",
      label: "Oru West ",
      id: 436,
    },
    {
      state: "Aboh Mbaise ",
      label: "Owerri Municipal ",
      id: 437,
    },
    {
      state: "Aboh Mbaise ",
      label: "Owerri North ",
      id: 438,
    },
    {
      state: "Aboh Mbaise ",
      label: "Unuimo ",
      id: 439,
    },
    {
      state: "Aboh Mbaise ",
      label: " Owerri West",
      id: 440,
    },
    {
      state: " Kaduna",
      label: " Birnin Gwari",
      id: 441,
    },
    {
      state: " Kaduna",
      label: " Chikun",
      id: 442,
    },
    {
      state: "Kaduna ",
      label: "Giwa ",
      id: 443,
    },
    {
      state: "Kaduna ",
      label: "Ikara ",
      id: 444,
    },
    {
      state: "Kaduna ",
      label: " Igabi",
      id: 445,
    },
    {
      state: "Kaduna ",
      label: "Jaba ",
      id: 446,
    },
    {
      state: "Kaduna ",
      label: "Jema'a ",
      id: 447,
    },
    {
      state: "Kaduna ",
      label: "Kachia ",
      id: 448,
    },
    {
      state: "Kaduna ",
      label: " Kaduna North",
      id: 449,
    },
    {
      state: "Kaduna ",
      label: " Kaduna South",
      id: 450,
    },
    {
      state: " Kaduna",
      label: " Kagarko",
      id: 451,
    },
    {
      state: "Kaduna ",
      label: "Kajuru ",
      id: 452,
    },
    {
      state: " Kaduna",
      label: " Kaura",
      id: 453,
    },
    {
      state: "Kaduna ",
      label: " Kauru",
      id: 454,
    },
    {
      state: "Kaduna ",
      label: " Kubau",
      id: 455,
    },
    {
      state: "Kaduna ",
      label: "Kudan ",
      id: 456,
    },
    {
      state: "Kaduna ",
      label: " Lere",
      id: 457,
    },
    {
      state: "Kaduna ",
      label: "Makarfi ",
      id: 458,
    },
    {
      state: "Kaduna ",
      label: " Sabon Gari",
      id: 459,
    },
    {
      state: "Kaduna ",
      label: " Sanga",
      id: 460,
    },
    {
      state: "Kaduna ",
      label: " Soba",
      id: 461,
    },
    {
      state: " Kaduna",
      label: "Zangon Kataf ",
      id: 462,
    },
    {
      state: "Kaduna ",
      label: " Zaria",
      id: 463,
    },
    {
      state: " Kebbi",
      label: " Aleiro",
      id: 464,
    },
    {
      state: " Kebbi",
      label: " Argungu",
      id: 465,
    },
    {
      state: " Kebbi",
      label: "Arewa Dandi ",
      id: 466,
    },
    {
      state: " Kebbi",
      label: " Augie",
      id: 467,
    },
    {
      state: " Kebbi",
      label: "Bagudo ",
      id: 468,
    },
    {
      state: " Kebbi",
      label: " Birnin Kebbi",
      id: 469,
    },
    {
      state: " Kebbi",
      label: "Bunza ",
      id: 470,
    },
    {
      state: " Kebbi",
      label: " Dandi",
      id: 471,
    },
    {
      state: "Kebbi ",
      label: "Fakai ",
      id: 472,
    },
    {
      state: "Kebbi ",
      label: " Gwandu",
      id: 473,
    },
    {
      state: " Kebbi",
      label: "Jega ",
      id: 474,
    },
    {
      state: " Kebbi",
      label: "Kalgo ",
      id: 475,
    },
    {
      state: " Kebbi",
      label: "Koko/Besse ",
      id: 476,
    },
    {
      state: " Kebbi",
      label: "Maiyama ",
      id: 477,
    },
    {
      state: "Kebbi ",
      label: " Ngaski",
      id: 478,
    },
    {
      state: "Kebbi ",
      label: "Shanga ",
      id: 479,
    },
    {
      state: " Kebbi",
      label: " Suru",
      id: 480,
    },
    {
      state: "Kebbi ",
      label: " Sakaba",
      id: 481,
    },
    {
      state: " Kebbi",
      label: "Wasagu/Danko ",
      id: 482,
    },
    {
      state: " Kebbi",
      label: "Yauri ",
      id: 483,
    },
    {
      state: " Kebbi",
      label: "Zuru ",
      id: 484,
    },
    {
      state: "Kano ",
      label: " Ajingi",
      id: 485,
    },
    {
      state: "Kano ",
      label: " Albasu",
      id: 486,
    },
    {
      state: "Kano ",
      label: " Bagwai",
      id: 487,
    },
    {
      state: "Kano ",
      label: " Bebeji",
      id: 488,
    },
    {
      state: "Kano ",
      label: "Bichi ",
      id: 489,
    },
    {
      state: "Kano ",
      label: " Bunkure",
      id: 490,
    },
    {
      state: " Kano",
      label: " Dala",
      id: 491,
    },
    {
      state: " Kano",
      label: " Dambatta",
      id: 492,
    },
    {
      state: "Kano ",
      label: " Dawakin Kudu",
      id: 493,
    },
    {
      state: "Kano ",
      label: "Dawakin Tofa ",
      id: 494,
    },
    {
      state: " Kano",
      label: " Doguwa",
      id: 495,
    },
    {
      state: "Kano ",
      label: " Fagge",
      id: 496,
    },
    {
      state: "Kano ",
      label: "Gabasawa ",
      id: 497,
    },
    {
      state: " Kano",
      label: "Garko ",
      id: 498,
    },
    {
      state: " Kano",
      label: "Garun Mallam ",
      id: 499,
    },
    {
      state: " Kano",
      label: "Gezawa ",
      id: 500,
    },
    {
      state: " Kano",
      label: "Gaya ",
      id: 501,
    },
    {
      state: "Kano ",
      label: "Gwale ",
      id: 502,
    },
    {
      state: " Kano",
      label: "Gwarzo ",
      id: 503,
    },
    {
      state: "Kano ",
      label: "Kabo ",
      id: 504,
    },
    {
      state: " Kano",
      label: " Kano Municipal",
      id: 505,
    },
    {
      state: " Kano",
      label: "Karaye ",
      id: 506,
    },
    {
      state: " Kano",
      label: " Kibiya",
      id: 507,
    },
    {
      state: "Kano ",
      label: "Kiru ",
      id: 508,
    },
    {
      state: "Kano ",
      label: " Kumbotso",
      id: 509,
    },
    {
      state: " Kano",
      label: " Kunchi",
      id: 510,
    },
    {
      state: "Kano ",
      label: " Kura",
      id: 511,
    },
    {
      state: "Kano ",
      label: " Madobi",
      id: 512,
    },
    {
      state: "Kano ",
      label: " Makoda",
      id: 513,
    },
    {
      state: " Kano",
      label: " Minjibir",
      id: 514,
    },
    {
      state: " Kano",
      label: " Nasarawa",
      id: 515,
    },
    {
      state: " Kano",
      label: " Rano",
      id: 516,
    },
    {
      state: " Kano",
      label: "Rimin Gado ",
      id: 517,
    },
    {
      state: "Kano ",
      label: " Rogo",
      id: 518,
    },
    {
      state: " Kano",
      label: "Shanono ",
      id: 519,
    },
    {
      state: "Kano ",
      label: " Takai",
      id: 520,
    },
    {
      state: "Kano ",
      label: " Sumaila",
      id: 521,
    },
    {
      state: "Kano ",
      label: "Tarauni ",
      id: 522,
    },
    {
      state: "Kano ",
      label: " Tofa",
      id: 523,
    },
    {
      state: " Kano",
      label: "Tsanyawa ",
      id: 524,
    },
    {
      state: "Kano ",
      label: " Tudun Wada",
      id: 525,
    },
    {
      state: " Kano",
      label: " Ungogo",
      id: 526,
    },
    {
      state: "Kano ",
      label: " Warawa",
      id: 527,
    },
    {
      state: "Kano ",
      label: " Wudil",
      id: 528,
    },
    {
      state: "Kogi ",
      label: " Ajaokuta",
      id: 529,
    },
    {
      state: "Kogi ",
      label: "Adavi ",
      id: 530,
    },
    {
      state: "Kogi ",
      label: "Ankpa ",
      id: 531,
    },
    {
      state: "Kogi ",
      label: "Bassa ",
      id: 532,
    },
    {
      state: "Kogi ",
      label: "Dekina ",
      id: 533,
    },
    {
      state: "Kogi ",
      label: "Ibaji ",
      id: 534,
    },
    {
      state: "Kogi ",
      label: " Idah",
      id: 535,
    },
    {
      state: "Kogi ",
      label: " Igalamela Odolu",
      id: 536,
    },
    {
      state: "Kogi ",
      label: " Ijumu",
      id: 537,
    },
    {
      state: "Kogi ",
      label: "Kogi ",
      id: 538,
    },
    {
      state: "Kogi ",
      label: "Kabba/Bunu ",
      id: 539,
    },
    {
      state: "Kogi ",
      label: " Lokoja",
      id: 540,
    },
    {
      state: "Kogi ",
      label: " Ofu",
      id: 541,
    },
    {
      state: "Kogi ",
      label: " Mopa Muro",
      id: 542,
    },
    {
      state: "Kogi ",
      label: "Ogori/Magongo ",
      id: 543,
    },
    {
      state: "Kogi ",
      label: " Okehi",
      id: 544,
    },
    {
      state: "Kogi ",
      label: " Okene",
      id: 545,
    },
    {
      state: "Kogi ",
      label: " Olamaboro",
      id: 546,
    },
    {
      state: "Kogi ",
      label: " Omala",
      id: 547,
    },
    {
      state: "Kogi ",
      label: " Yagba East",
      id: 548,
    },
    {
      state: "Kogi ",
      label: "Yagba West ",
      id: 549,
    },
    {
      state: "Osun ",
      label: "Aiyedire ",
      id: 550,
    },
    {
      state: "Osun ",
      label: "Atakunmosa West ",
      id: 551,
    },
    {
      state: "Osun ",
      label: "Atakunmosa East ",
      id: 552,
    },
    {
      state: "Osun ",
      label: "Aiyedaade ",
      id: 553,
    },
    {
      state: "Osun ",
      label: " Boluwaduro",
      id: 554,
    },
    {
      state: "Osun ",
      label: "Boripe ",
      id: 555,
    },
    {
      state: "Osun ",
      label: " Ife East",
      id: 556,
    },
    {
      state: "Osun ",
      label: " Ede South",
      id: 557,
    },
    {
      state: "Osun ",
      label: " Ife North",
      id: 558,
    },
    {
      state: "Osun ",
      label: " Ede North",
      id: 559,
    },
    {
      state: "Osun ",
      label: " Ife South",
      id: 560,
    },
    {
      state: "Osun ",
      label: " Ejigbo",
      id: 561,
    },
    {
      state: "Osun ",
      label: "Ife Central ",
      id: 562,
    },
    {
      state: "Osun ",
      label: " Ifedayo",
      id: 563,
    },
    {
      state: "Osun ",
      label: " Egbedore",
      id: 564,
    },
    {
      state: "Osun ",
      label: "Ila ",
      id: 565,
    },
    {
      state: "Osun ",
      label: " Ifelodun",
      id: 566,
    },
    {
      state: "Osun ",
      label: " Ilesa East",
      id: 567,
    },
    {
      state: "Osun ",
      label: " Ilesa West",
      id: 568,
    },
    {
      state: "Osun ",
      label: " Irepodun",
      id: 569,
    },
    {
      state: "Osun ",
      label: "Irewole ",
      id: 570,
    },
    {
      state: "Osun ",
      label: " Isokan",
      id: 571,
    },
    {
      state: "Osun ",
      label: " Iwo",
      id: 572,
    },
    {
      state: "Osun ",
      label: " Obokun",
      id: 573,
    },
    {
      state: "Osun ",
      label: " Odo Otin",
      id: 574,
    },
    {
      state: "Osun ",
      label: " Ola Oluwa",
      id: 575,
    },
    {
      state: "Osun ",
      label: " Olorunda",
      id: 576,
    },
    {
      state: "Osun ",
      label: " Oriade",
      id: 577,
    },
    {
      state: "Osun ",
      label: " Orolu",
      id: 578,
    },
    {
      state: "Osun ",
      label: "Osogbo ",
      id: 579,
    },
    {
      state: "Sokoto ",
      label: " Gada",
      id: 580,
    },
    {
      state: "Sokoto ",
      label: " Goronyo",
      id: 581,
    },
    {
      state: "Sokoto ",
      label: " Gudu",
      id: 582,
    },
    {
      state: "Sokoto ",
      label: " Gwadabawa",
      id: 583,
    },
    {
      state: "Sokoto ",
      label: "Illela ",
      id: 584,
    },
    {
      state: "Sokoto ",
      label: " Isa",
      id: 585,
    },
    {
      state: "Sokoto ",
      label: " Kebbe",
      id: 586,
    },
    {
      state: "Sokoto ",
      label: "Kware ",
      id: 587,
    },
    {
      state: "Sokoto ",
      label: " Rabah",
      id: 588,
    },
    {
      state: "Sokoto ",
      label: " Sabon Birni",
      id: 589,
    },
    {
      state: "Sokoto ",
      label: " Shagari",
      id: 590,
    },
    {
      state: "Sokoto ",
      label: "Silame ",
      id: 591,
    },
    {
      state: "Sokoto ",
      label: " Sokoto North",
      id: 592,
    },
    {
      state: "Sokoto ",
      label: " Sokoto South",
      id: 593,
    },
    {
      state: "Sokoto ",
      label: " Tambuwal",
      id: 594,
    },
    {
      state: "Sokoto ",
      label: "Tangaza ",
      id: 595,
    },
    {
      state: "Sokoto ",
      label: " Tureta",
      id: 596,
    },
    {
      state: "Sokoto ",
      label: "Wamako ",
      id: 597,
    },
    {
      state: "Sokoto ",
      label: " Wurno",
      id: 598,
    },
    {
      state: "Sokoto ",
      label: " Yabo",
      id: 599,
    },
    {
      state: "Sokoto ",
      label: " Binji",
      id: 600,
    },
    {
      state: "Sokoto ",
      label: " Bodinga",
      id: 601,
    },
    {
      state: "Sokoto ",
      label: " Dange Shuni",
      id: 602,
    },
    {
      state: "Plateau ",
      label: "Bokkos  ",
      id: 603,
    },
    {
      state: "Plateau ",
      label: " Barkin Ladi",
      id: 604,
    },
    {
      state: "Plateau ",
      label: "Bassa ",
      id: 605,
    },
    {
      state: "Plateau ",
      label: " Jos East",
      id: 606,
    },
    {
      state: "Plateau ",
      label: " Jos North",
      id: 607,
    },
    {
      state: "Plateau ",
      label: "Jos South ",
      id: 608,
    },
    {
      state: "Plateau ",
      label: " Kanam",
      id: 609,
    },
    {
      state: "Plateau ",
      label: " Kanke",
      id: 610,
    },
    {
      state: "Plateau ",
      label: " Langtang South",
      id: 611,
    },
    {
      state: "Plateau ",
      label: "Langtang North ",
      id: 512,
    },
    {
      state: "Plateau ",
      label: " Mangu",
      id: 613,
    },
    {
      state: "Plateau ",
      label: " Mikang",
      id: 614,
    },
    {
      state: "Plateau ",
      label: "Pankshin ",
      id: 615,
    },
    {
      state: "Plateau ",
      label: " Qua'an Pan",
      id: 616,
    },
    {
      state: "Plateau ",
      label: " Riyom",
      id: 617,
    },
    {
      state: "Plateau ",
      label: " Shendam",
      id: 618,
    },
    {
      state: "Plateau ",
      label: " Wase",
      id: 619,
    },
    {
      state: "Taraba ",
      label: "Ardo Kola ",
      id: 620,
    },
    {
      state: "Taraba ",
      label: " Bali",
      id: 621,
    },
    {
      state: "Taraba ",
      label: "Donga ",
      id: 622,
    },
    {
      state: "Taraba ",
      label: " Gashaka",
      id: 623,
    },
    {
      state: "Taraba ",
      label: " Gassol",
      id: 624,
    },
    {
      state: "Taraba ",
      label: " Ibi",
      id: 625,
    },
    {
      state: "Taraba ",
      label: "Jalingo ",
      id: 626,
    },
    {
      state: "Taraba ",
      label: "Karim Lamido ",
      id: 627,
    },
    {
      state: "Taraba ",
      label: "Kumi ",
      id: 628,
    },
    {
      state: "Taraba ",
      label: " Lau",
      id: 629,
    },
    {
      state: "Taraba ",
      label: " Sardauna",
      id: 630,
    },
    {
      state: "Taraba ",
      label: " Takum",
      id: 631,
    },
    {
      state: "Taraba ",
      label: " Ussa",
      id: 632,
    },
    {
      state: "Taraba ",
      label: " Wukari",
      id: 637,
    },
    {
      state: "Taraba ",
      label: "Yorro ",
      id: 634,
    },
    {
      state: "Taraba ",
      label: "Zing ",
      id: 635,
    },
    {
      state: "Yobe ",
      label: "Bade ",
      id: 636,
    },
    {
      state: "Yobe ",
      label: "Bursari ",
      id: 637,
    },
    {
      state: "Yobe ",
      label: " Damaturu",
      id: 638,
    },
    {
      state: "Yobe ",
      label: " Fika",
      id: 639,
    },
    {
      state: "Yobe ",
      label: " Fune",
      id: 640,
    },
    {
      state: "Yobe ",
      label: "Geidam ",
      id: 641,
    },
    {
      state: "Yobe ",
      label: "Gujba ",
      id: 642,
    },
    {
      state: "Yobe ",
      label: " Gulani",
      id: 643,
    },
    {
      state: "Yobe ",
      label: " Jakusko",
      id: 644,
    },
    {
      state: "Yobe ",
      label: "Karasuwa ",
      id: 645,
    },
    {
      state: "Yobe ",
      label: " Machina",
      id: 646,
    },
    {
      state: "Yobe ",
      label: " Nangere",
      id: 647,
    },
    {
      state: "Yobe ",
      label: " Nguru",
      id: 648,
    },
    {
      state: "Yobe ",
      label: "Potiskum ",
      id: 649,
    },
    {
      state: "Yobe ",
      label: "Tarmuwa ",
      id: 650,
    },
    {
      state: "Yobe ",
      label: " Yunusari",
      id: 651,
    },
    {
      state: "Yobe ",
      label: " Yusufari",
      id: 652,
    },
    {
      state: "Zamfara ",
      label: " Anka",
      id: 653,
    },
    {
      state: "Zamfara ",
      label: "Birnin Magaji/Kiyaw ",
      id: 654,
    },
    {
      state: "Zamfara ",
      label: " Bakura",
      id: 655,
    },
    {
      state: "Zamfara ",
      label: " Bukkuyum",
      id: 656,
    },
    {
      state: "Zamfara ",
      label: " Bungudu",
      id: 657,
    },
    {
      state: "Zamfara ",
      label: "Gummi ",
      id: 658,
    },
    {
      state: "Zamfara ",
      label: " Gusau",
      id: 659,
    },
    {
      state: "Zamfara ",
      label: " Kaura Namoda",
      id: 660,
    },
    {
      state: "Zamfara ",
      label: " Maradun",
      id: 661,
    },
    {
      state: "Zamfara ",
      label: " Shinkafi",
      id: 662,
    },
    {
      state: "Zamfara ",
      label: " Maru",
      id: 663,
    },
    {
      state: "Zamfara ",
      label: "Talata Mafara ",
      id: 664,
    },
    {
      state: "Zamfara ",
      label: " Tsafe",
      id: 665,
    },
    {
      state: "Zamfara ",
      label: " Zurmi",
      id: 666,
    },
    {
      state: " Lagos ",
      label: "Agege ",
      id: 667,
    },
    {
      state: "Lagos ",
      label: " Ajeromi-Ifelodun",
      id: 668,
    },
    {
      state: "Lagos ",
      label: " Alimosho",
      id: 669,
    },
    {
      state: "Lagos ",
      label: " Amuwo-Odofin",
      id: 670,
    },
    {
      state: "Lagos ",
      label: "Badagry ",
      id: 671,
    },
    {
      state: "Lagos ",
      label: " Apapa",
      id: 672,
    },
    {
      state: "Lagos ",
      label: " Epe",
      id: 673,
    },
    {
      state: "Lagos ",
      label: "Eti Osa ",
      id: 674,
    },
    {
      state: "Lagos ",
      label: "Ibeju-Lekki ",
      id: 675,
    },
    {
      state: "Lagos ",
      label: "Ifako-Ijaiye ",
      id: 676,
    },
    {
      state: "Lagos ",
      label: " Ikeja",
      id: 677,
    },
    {
      state: "Lagos ",
      label: " Ikorodu",
      id: 678,
    },
    {
      state: "Lagos ",
      label: " Kosofe",
      id: 679,
    },
    {
      state: "Lagos ",
      label: " Lagos Island",
      id: 680,
    },
    {
      state: "Lagos ",
      label: " Mushin",
      id: 681,
    },
    {
      state: "Lagos ",
      label: " Lagos Mainland",
      id: 682,
    },
    {
      state: "Lagos ",
      label: "Ojo ",
      id: 683,
    },
    {
      state: "Lagos ",
      label: " Oshodi-Isolo",
      id: 684,
    },
    {
      state: "Lagos ",
      label: " Shomolu",
      id: 685,
    },
    {
      state: "Lagos ",
      label: "Surulere Lagos State ",
      id: 686,
    },
    {
      state: "Katsina ",
      label: "Bakori ",
      id: 687,
    },
    {
      state: "Katsina ",
      label: "Batagarawa ",
      id: 688,
    },
    {
      state: "Katsina ",
      label: "Batsari ",
      id: 689,
    },
    {
      state: "Katsina ",
      label: "Baure ",
      id: 690,
    },
    {
      state: "Katsina ",
      label: " Bindawa",
      id: 691,
    },
    {
      state: "Katsina ",
      label: " Charanchi",
      id: 692,
    },
    {
      state: "Katsina ",
      label: "Danja ",
      id: 693,
    },
    {
      state: "Katsina ",
      label: " Dandume",
      id: 694,
    },
    {
      state: "Katsina ",
      label: " Dan Musa",
      id: 695,
    },
    {
      state: "Katsina ",
      label: " Daura",
      id: 696,
    },
    {
      state: "Katsina ",
      label: "Dutsi ",
      id: 697,
    },
    {
      state: "Katsina ",
      label: "Dutsin Ma ",
      id: 698,
    },
    {
      state: "Katsina ",
      label: "Faskari ",
      id: 699,
    },
    {
      state: "Katsina ",
      label: " Funtua",
      id: 700,
    },
    {
      state: "Katsina ",
      label: "Ingawa ",
      id: 701,
    },
    {
      state: "Katsina ",
      label: "Jibia ",
      id: 702,
    },
    {
      state: "Katsina ",
      label: "Kafur ",
      id: 703,
    },
    {
      state: "Katsina ",
      label: "Kaita ",
      id: 704,
    },
    {
      state: "Katsina ",
      label: "Kankara ",
      id: 705,
    },
    {
      state: "Katsina ",
      label: " Kankia",
      id: 706,
    },
    {
      state: "Katsina ",
      label: "Katsina ",
      id: 707,
    },
    {
      state: "Katsina ",
      label: " Kurfi",
      id: 708,
    },
    {
      state: "Katsina ",
      label: "Kusada ",
      id: 709,
    },
    {
      state: "Katsina ",
      label: "Mai'Adua ",
      id: 710,
    },
    {
      state: "Katsina ",
      label: " Malumfashi",
      id: 711,
    },
    {
      state: "Katsina ",
      label: "Mani ",
      id: 712,
    },
    {
      state: "Katsina ",
      label: " Mashi",
      id: 713,
    },
    {
      state: "Katsina ",
      label: " Matazu",
      id: 714,
    },
    {
      state: "Katsina ",
      label: "Musawa ",
      id: 715,
    },
    {
      state: "Katsina ",
      label: "Rimi ",
      id: 716,
    },
    {
      state: "Katsina ",
      label: "Sabuwa ",
      id: 717,
    },
    {
      state: "Katsina ",
      label: " Safana",
      id: 718,
    },
    {
      state: "Katsina ",
      label: " Sandamu",
      id: 719,
    },
    {
      state: "Katsina ",
      label: "Zango ",
      id: 720,
    },
    {
      state: "Kwara ",
      label: " Asa",
      id: 721,
    },
    {
      state: "Kwara ",
      label: " Baruten",
      id: 722,
    },
    {
      state: "Kwara ",
      label: " Edu",
      id: 723,
    },
    {
      state: "Kwara ",
      label: " Ilorin East",
      id: 724,
    },
    {
      state: "Kwara ",
      label: "Ifelodun ",
      id: 725,
    },
    {
      state: "Kwara ",
      label: " Ilorin South",
      id: 726,
    },
    {
      state: "Kwara ",
      label: " Ekiti Kwara State",
      id: 727,
    },
    {
      state: "Kwara ",
      label: " Ilorin West",
      id: 728,
    },
    {
      state: "Kwara ",
      label: " Irepodun",
      id: 729,
    },
    {
      state: "Kwara ",
      label: "Isin ",
      id: 730,
    },
    {
      state: "Kwara ",
      label: " Kaiama",
      id: 731,
    },
    {
      state: "Kwara ",
      label: "Moro ",
      id: 732,
    },
    {
      state: "Kwara ",
      label: " Offa",
      id: 733,
    },
    {
      state: "Kwara ",
      label: "Oke Ero ",
      id: 734,
    },
    {
      state: "Kwara ",
      label: " Oyun",
      id: 735,
    },
    {
      state: "Kwara ",
      label: " Pategi",
      id: 736,
    },
    {
      state: "Nasarawa ",
      label: "Akwanga ",
      id: 737,
    },
    {
      state: "Nasarawa ",
      label: " Awe",
      id: 738,
    },
    {
      state: "Nasarawa ",
      label: " Doma",
      id: 739,
    },
    {
      state: "Nasarawa ",
      label: "Karu ",
      id: 740,
    },
    {
      state: "Nasarawa ",
      label: " Keana",
      id: 741,
    },
    {
      state: "Nasarawa ",
      label: " Keffi",
      id: 742,
    },
    {
      state: "Nasarawa ",
      label: " Lafia",
      id: 743,
    },
    {
      state: "Nasarawa ",
      label: "Kokona ",
      id: 744,
    },
    {
      state: "Nasarawa ",
      label: " Nasarawa Egon",
      id: 745,
    },
    {
      state: "Nasarawa ",
      label: "Nasarawa ",
      id: 746,
    },
    {
      state: "Nasarawa ",
      label: "Obi ",
      id: 747,
    },
    {
      state: "Nasarawa ",
      label: "Toto ",
      id: 748,
    },
    {
      state: "Nasarawa ",
      label: " Wamba",
      id: 749,
    },
    {
      state: "Niger ",
      label: "Agaie ",
      id: 750,
    },
    {
      state: "Niger ",
      label: "Agwara ",
      id: 751,
    },
    {
      state: "Niger ",
      label: "Bida ",
      id: 752,
    },
    {
      state: "Niger ",
      label: " Borgu",
      id: 753,
    },
    {
      state: "Niger ",
      label: " Bosso",
      id: 754,
    },
    {
      state: "Niger ",
      label: "Chanchaga ",
      id: 755,
    },
    {
      state: "Niger ",
      label: "Edati ",
      id: 756,
    },
    {
      state: "Niger ",
      label: " Gbako",
      id: 757,
    },
    {
      state: "Niger ",
      label: " Gurara",
      id: 758,
    },
    {
      state: "Niger ",
      label: " Katcha",
      id: 759,
    },
    {
      state: "Niger ",
      label: "Kontagora ",
      id: 760,
    },
    {
      state: "Niger ",
      label: "Lapai ",
      id: 761,
    },
    {
      state: "Niger ",
      label: " Lavun",
      id: 762,
    },
    {
      state: "Niger ",
      label: "Mariga ",
      id: 763,
    },
    {
      state: "Niger ",
      label: " Magama",
      id: 764,
    },
    {
      state: "Niger ",
      label: "Mokwa ",
      id: 765,
    },
    {
      state: "Niger ",
      label: " Mashegu",
      id: 766,
    },
    {
      state: "Niger ",
      label: "Moya ",
      id: 767,
    },
    {
      state: "Niger ",
      label: "Paikoro ",
      id: 768,
    },
    {
      state: "Niger ",
      label: " Rafi",
      id: 769,
    },
    {
      state: "Niger ",
      label: "Rijau ",
      id: 770,
    },
    {
      state: "Niger ",
      label: " Shiroro",
      id: 771,
    },
    {
      state: "Niger ",
      label: " Suleja",
      id: 772,
    },
    {
      state: "Niger ",
      label: "Tafa ",
      id: 773,
    },
    {
      state: "Niger ",
      label: "Wushishi ",
      id: 774,
    },
  ];

  const allRoleModel = [
    {
      state: "Dr. Dakuku Peterside",
      gov: "Fmr. Director General, NIMASA",
      id: 1,
      image: role_model_images.one,
    },
    {
      state: "Dr. Donald Duke",
      gov: "Fmr. Governor, Cross River State",
      id: 2,
      image: role_model_images.two,
    },
    {
      state: "Dr. Ngozi Okonjo-Iewala",
      gov: "Fmr. Minister of finance",
      id: 3,
      image: role_model_images.three,
    },
    {
      state: "Dr. Oboageli Ezekwesili",
      gov: "Former. Minister of Education",
      id: 4,
      image: role_model_images.four,
    },
    {
      state: "Dr. Peter Obi",
      gov: "Fmr. Governor of Anambra State",
      id: 5,
      image: role_model_images.five,
    },
    {
      state: "H.R.H. Sanusi Lamido Sanusi",
      gov: "Fmr. CBN Governor",
      id: 6,
      image: role_model_images.six,
    },
    {
      state: "Prof. Akinwumi Adesina",
      gov: "Former. Minister of Agriculture",
      id: 7,
      image: role_model_images.seven,
    },
    {
      state: "Prof. Charlse C. Soludo",
      gov: "Former Governor Central Bank of Nigeria",
      id: 8,
      image: role_model_images.eight,
    },
    {
      state: "Prof. Dora Akunyili",
      gov: "Fmr. Director General, NAFDAC",
      id: 9,
      image: role_model_images.nine,
    },
    {
      state: "Proffesor Ishaq Oloyede",
      gov: "Current JAMB Registrar",
      id: 10,
      image: role_model_images.ten,
    },
    {
      state: "Reno Omokri",
      gov: "SA to Fmr.President G.E Jonathan",
      id: 11,
      image: role_model_images.eleven,
    },
    {
      state: "Rt. Hom. Rotimi Chibuike Amaechi",
      gov: "Fmr. Governor Rivers State",
      id: 12,
      image: role_model_images.twelve,
    },
  ];

  const allsen = [
    {
      Label: "Abia central",
      state: "Abia",
      name: "Theodore Orji",
      party: "PDP",
      id: 1,
    },

    {
      Label: "Abia North",
      state: "Abia",
      name: " Orji Uzor Kalu",
      party: "APC",
      id: 2,
    },

    {
      Label: "Abia South",
      state: "Abia",
      name: "Enyinnaya Abaribe",
      party: "PDP",
      id: 3,
    },

    {
      Label: "Adamawa Central",
      state: "Adamawa",
      name: "Aishatu Dahiru Ahmed",
      party: "APC",
      id: 4,
    },

    {
      Label: "Adamawa North",
      state: "Adamawa",
      name: "Ishaku Elisha Abbo",
      party: "APC",
      id: 5,
    },

    {
      Label: "Adamawa South",
      state: "Adamawa",
      name: "Binos Dauda Yaroe",
      party: "PDP",
      id: 6,
    },

    {
      Label: "Akwaibom North-East",
      state: "Akwaibom",
      name: "Bassey Albert Akpan ",
      party: "PDP",
      id: 7,
    },

    {
      Label: "Akwaibom North-West",
      state: "Akwaibom",
      name: "Chris Ekpenyong ",
      party: "PDP",
      id: 8,
    },

    {
      Label: "Akwaibom South",
      state: "Akwaibom",
      name: "Akon Eyakenyi",
      party: "PDP",
      id: 9,
    },

    {
      Label: "Anambra Central",
      state: "Anambra",
      name: "Uche Ekwunife",
      party: "PDP",
      id: 10,
    },

    {
      Label: "Anambra North",
      state: "Anambra",
      name: "Stella Oduah-Ogiemwonyi",
      party: "APC",
      id: 11,
    },

    {
      Label: "Anambra South",
      state: "Anambra",
      name: "Ifeanyi Ubah",
      party: "YPP",
      id: 12,
    },

    {
      Label: "Bauchi Central",
      state: "Bauchi",
      name: "Halliru Dauda Jika",
      party: "APC",
      id: 13,
    },

    {
      Label: "Bauchi North",
      state: "Bauchi",
      name: "Adamu Muhammad Bulkachuwa",
      party: "APC",
      id: 14,
    },

    {
      Label: "Bauchi South",
      state: "Bauchi",
      name: "Lawal Yahaya Gumau",
      party: "APC",
      id: 15,
    },

    {
      Label: "Bayelsa Central",
      state: "Bayelsa",
      name: "Moses Cleopas",
      party: "PDP",
      id: 16,
    },

    {
      Label: "Bayelsa East",
      state: "Bayelsa",
      name: "Biobarakuma Degi ",
      party: "APC",
      id: 17,
    },

    {
      Label: "Bayelsa West",
      state: "Bayelsa",
      name: " Henry Seriake Dickson",
      party: "PDP",
      id: 18,
    },

    {
      Label: "Benue North-East",
      state: "Benue",
      name: "Gabriel Suswam",
      party: "PDP",
      id: 19,
    },

    {
      Label: "Benue North-West",
      state: "Benue",
      name: "Emmanuel Yisa Orker-Jev",
      party: "PDP",
      id: 20,
    },

    {
      Label: "Benue South",
      state: "Benue",
      name: "Patrick Abba Moro",
      party: "PDP",
      id: 21,
    },

    {
      Label: "Borno Central",
      state: "Borno",
      name: "Kashim Shettima",
      party: "APC",
      id: 22,
    },

    {
      Label: "Borno North",
      state: "Borno",
      name: "Abubakar Shaib Kyari",
      party: "APC",
      id: 23,
    },

    {
      Label: "Borno South",
      state: "Borno",
      name: "Mohammed Ali Ndume",
      party: "APC",
      id: 24,
    },

    {
      Label: "Cross River Central",
      state: "Cross River",
      name: "Sandy Ojang Onor",
      party: "PDP",
      id: 25,
    },

    {
      Label: "Cross River North",
      state: "Cross River",
      name: "Agom Jarigbe",
      party: "PDP",
      id: 26,
    },

    {
      Label: "Cross River South",
      state: "Cross River",
      name: "Gershom Bassey",
      party: "PDP",
      id: 27,
    },

    {
      Label: "Delta Central",
      state: "Delta",
      name: "Ovie Omo-Agege",
      party: "APC",
      id: 28,
    },

    {
      Label: "Delta North",
      state: "Delta",
      name: "Peter Nwaoboshi",
      party: "APC",
      id: 29,
    },

    {
      Label: "Delta South",
      state: "Delta",
      name: "James Manager",
      party: "PDP",
      id: 30,
    },

    {
      Label: "Ebonyi Central",
      state: "Ebonyi",
      name: "Joseph Ogba",
      party: "PDP",
      id: 31,
    },

    {
      Label: "Ebonyi North",
      state: "Ebonyi",
      name: "Sam Egwu",
      party: "PDP",
      id: 32,
    },

    {
      Label: "Ebonyi South",
      state: "Ebonyi",
      name: "Michael Ama Nnachi",
      party: "PDP",
      id: 33,
    },

    {
      Label: "Edo Central",
      state: "Edo",
      name: "Clifford Ordia",
      party: "PDP",
      id: 34,
    },

    {
      Label: "Edo North",
      state: "Edo",
      name: "Francis Alimikhena",
      party: "APC",
      id: 35,
    },

    {
      Label: "Edo South",
      state: "Edo",
      name: "Matthew Urhoghide",
      party: "PDP",
      id: 36,
    },

    {
      Label: "Ekiti Central",
      state: "Ekiti",
      name: "Michael Opeyemi Bamidele",
      party: "APC",
      id: 37,
    },

    {
      Label: "Ekiti North",
      state: "Ekiti",
      name: "Olubunmi Ayodeji Adetunmb",
      party: "APC",
      id: 38,
    },

    {
      Label: "Ekiti South",
      state: "Ekiti",
      name: "Abiodun Olujimi",
      party: "PDP",
      id: 39,
    },

    {
      Label: "Enugu East",
      state: "Enugu",
      name: "Chimaroke Nnamani",
      party: "PDP",
      id: 40,
    },

    {
      Label: "Enugu North",
      state: "Enugu",
      name: "Utazi Chukwuka",
      party: "PDP",
      id: 41,
    },

    {
      Label: "Enugu West",
      state: "Enugu",
      name: "Ike Ekweremadu",
      party: "PDP",
      id: 42,
    },

    {
      Label: "FCT",
      state: "FCT",
      name: "Philips Tanimu Aduda",
      party: "PDP",
      id: 43,
    },

    {
      Label: "Gombe Central",
      state: "Gombe",
      name: "Mohammed Danjuma Goje",
      party: "APC",
      id: 44,
    },

    {
      Label: "Gombe North",
      state: "Gombe",
      name: "Sa'idu Ahmed Alkali",
      party: "APC",
      id: 45,
    },

    {
      Label: "Gombe South",
      state: "Gombe",
      name: "Amos Bulus Kilawangs",
      party: "APC",
      id: 46,
    },

    {
      Label: "Imo East",
      state: "imo",
      name: "Onyewuchi Francis Ezenwa",
      party: "PDP",
      id: 47,
    },

    {
      Label: "Imo North",
      state: "imo",
      name: "Chukwuma Frank Ibezim",
      party: "APC",
      id: 48,
    },

    {
      Label: "Imo West",
      state: "imo",
      name: "Rochas Okorocha",
      party: "APC",
      id: 49,
    },

    {
      Label: "Jigawa North-East",
      state: "Jigawa",
      name: "Ibrahim Hassan Hadejia",
      party: "APC",
      id: 50,
    },

    {
      Label: "Jigawa North-West",
      state: "Jigawa",
      name: "Danladi Abdullahi Sankara",
      party: "APC",
      id: 51,
    },

    {
      Label: "Jigawa South-West",
      state: "Jigawa",
      name: "Mohammed Sabo",
      party: "APC",
      id: 52,
    },

    {
      Label: "Kaduna Central",
      state: "Kaduna",
      name: "Uba Sani",
      party: "APC",
      id: 53,
    },

    {
      Label: "Kaduna North",
      state: "Kaduna",
      name: "Suleiman Abdu Kwari",
      party: "APC",
      id: 54,
    },

    {
      Label: "Kaduna South",
      state: "Kaduna",
      name: "Danjuma Laah",
      party: "PDP",
      id: 55,
    },

    {
      Label: "Kano Central",
      state: "Kano",
      name: "Ibrahim Shekarau",
      party: "APC",
      id: 56,
    },

    {
      Label: "Kano North",
      state: "Kano",
      name: "Barau Jibrin",
      party: "APC",
      id: 57,
    },

    {
      Label: "Kano South",
      state: "Kano",
      name: "Kabiru Ibrahim Gaya",
      party: "APC",
      id: 58,
    },

    {
      Label: "Katsina Central",
      state: "Katsina",
      name: "Kabiru Barkiya",
      party: "APC",
      id: 59,
    },

    {
      Label: "Katsina South",
      state: "Katsina",
      name: "Bello Mandiya",
      party: "APC",
      id: 60,
    },

    {
      Label: "Katsina North",
      state: "Katsina",
      name: "Ahmad Babba Kaita",
      party: "APC",
      id: 61,
    },

    {
      Label: "Kebbi Central",
      state: "Kebbi",
      name: "Adamu Aliero",
      party: "APC",
      id: 62,
    },

    {
      Label: "Kebbi North",
      state: "Kebbi",
      name: "Yahya Abubakar Abdullahi",
      party: "APC",
      id: 63,
    },

    {
      Label: "Kebbi South",
      state: "Kebbi",
      name: "Bala Ibn Na'allah",
      party: "APC",
      id: 64,
    },

    {
      Label: "Kogi Central",
      state: "Kogi",
      name: "Yakubu Oseni",
      party: "APC",
      id: 65,
    },

    {
      Label: "Kogi East",
      state: "Kogi",
      name: "Jibrin Isah",
      party: "APC",
      id: 66,
    },

    {
      Label: "Kogi West",
      state: "Kogi",
      name: "Smart Adeyemi",
      party: "APC",
      id: 67,
    },

    {
      Label: "Kwara Central",
      state: "Kwara",
      name: "Ibrahim Yahaya Oloriegbe",
      party: "APC",
      id: 68,
    },

    {
      Label: "Kwara North",
      state: "Kwara",
      name: "Suleiman Sadiq Umar",
      party: "APC",
      id: 69,
    },

    {
      Label: "Kwara South",
      state: "Kwara",
      name: "Lola Ashiru",
      party: "APC",
      id: 70,
    },

    {
      Label: "Lagos Central",
      state: "Lagos",
      name: "Oluremi Tinubu",
      party: "APC",
      id: 71,
    },

    {
      Label: "Lagos East",
      state: "Lagos",
      name: "Tokunbo Abiru",
      party: "APC",
      id: 72,
    },

    {
      Label: "Lagos West",
      state: "Lagos",
      name: "Solomon Olamilekan Adeola",
      party: "APC",
      id: 73,
    },

    {
      Label: "Nasarawa North",
      state: "Nasarawa",
      name: "Godiya Akwashiki",
      party: "APC",
      id: 74,
    },

    {
      Label: "Nasarawa South",
      state: "Nasarawa",
      name: "Umaru Tanko Al-Makura",
      party: "APC",
      id: 75,
    },

    {
      Label: "Nasarawa West",
      state: "Nasarawa",
      name: "Abdullahi Adamu",
      party: "APC",
      id: 76,
    },

    {
      Label: "Niger East",
      state: "Niger",
      name: "Sani Musa",
      party: "APC",
      id: 77,
    },

    {
      Label: "Niger North",
      state: "Niger",
      name: "Aliyu Sabi Abdullahi",
      party: "APC",
      id: 78,
    },

    {
      Label: "Niger South",
      state: "Niger",
      name: "Muhammad Bima Enagi",
      party: "APC",
      id: 79,
    },

    {
      Label: "Ogun Central",
      state: "Ogun",
      name: "Ibikunle Amosun",
      party: "APC",
      id: 80,
    },

    {
      Label: "Ogun East",
      state: "Ogun",
      name: "Ramoni Olalekan Mustapha",
      party: "APC",
      id: 81,
    },

    {
      Label: "Ogun West",
      state: "Ogun",
      name: "Tolulope Odebiyi",
      party: "APC",
      id: 82,
    },

    {
      Label: "Ondo Central",
      state: "Ondo",
      name: "Akinyelure Patrick Ayo",
      party: "PDP",
      id: 83,
    },

    {
      Label: "Ondo North",
      state: "Ondo",
      name: "Robert Ajayi Boroffice",
      party: "APC",
      id: 84,
    },

    {
      Label: "Ondo South",
      state: "Ondo",
      name: "Nicholas Tofowomo",
      party: "PDP",
      id: 85,
    },

    {
      Label: "Osun Central",
      state: "Osun",
      name: "Ajibola Bashiru",
      party: "APC",
      id: 86,
    },

    {
      Label: "Osun East",
      state: "Osun",
      name: "Fadahunsi Francis Adenigba",
      party: "PDP",
      id: 87,
    },

    {
      Label: "Osun West",
      state: "Osun",
      name: "Adelere Adeyemi Oriolowo",
      party: "APC",
      id: 88,
    },

    {
      Label: "Oyo Central",
      state: "Oyo",
      name: "Teslim Kolawale Kolarin",
      party: "APC",
      id: 89,
    },

    {
      Label: "Oyo North",
      state: "Oyo",
      name: "Abdulfatai Buhari",
      party: "APC",
      id: 90,
    },

    {
      Label: "Oyo South",
      state: "Oyo",
      name: "Mohammed Kola Balogun",
      party: "PDP",
      id: 91,
    },

    {
      Label: "Plateau Central",
      state: "Plateau",
      name: "Hezekiah Ayuba Dimka",
      party: "APC",
      id: 92,
    },

    {
      Label: "Plateau North",
      state: "Plateau",
      name: "IStifanus Gyang",
      party: "PDP",
      id: 93,
    },

    {
      Label: "Plateau South",
      state: "Plateau",
      name: "Nora Daduut",
      party: "APC",
      id: 94,
    },

    {
      Label: "Rivers East",
      state: "Rivers",
      name: "George Thompson Sekibo",
      party: "PDP",
      id: 95,
    },

    {
      Label: "Rivers South-East",
      state: "Rivers",
      name: "Barry Mpigi",
      party: "PDP",
      id: 96,
    },

    {
      Label: "Rivers West",
      state: "Rivers",
      name: "Betty Apiafi",
      party: "PDP",
      id: 97,
    },

    {
      Label: "Sokoto East",
      state: "Sokoto",
      name: "Abdullahi Ibrahim Gobir",
      party: "APC",
      id: 98,
    },

    {
      Label: "Sokoto North",
      state: "Sokoto",
      name: "Aliyu Wamakko",
      party: "APC",
      id: 99,
    },

    {
      Label: "Sokoto South",
      state: "Sokoto",
      name: "Ibrahim Abdullahi Danbaba",
      party: "PDP",
      id: 100,
    },

    {
      Label: "Taraba Central",
      state: "Taraba",
      name: "Yusuf Abubakar Yusuf",
      party: "APC",
      id: 101,
    },

    {
      Label: "Taraba North",
      state: "Taraba",
      name: "Shuaibu Isa Lau",
      party: "PDP",
      id: 102,
    },

    {
      Label: "Taraba South",
      state: "Taraba",
      name: "Emmanuel Bwacha",
      party: "APC",
      id: 103,
    },

    {
      Label: "Yobe East",
      state: "Yobe",
      name: "Ibrahim Gaidam",
      party: "APC",
      id: 104,
    },

    {
      Label: "Yobe North",
      state: "Yobe",
      name: "Ahmed Lawan",
      party: "APC",
      id: 105,
    },

    {
      Label: "Yobe South",
      state: "Yobe",
      name: "Ibrahim Mohammed Bomai",
      party: "APC",
      id: 106,
    },

    {
      Label: "Zamfara North",
      state: "Zamfara",
      name: "Sahabi Alhaji Yaú",
      party: "APC",
      id: 107,
    },

    {
      Label: "Zamfara West",
      state: "Zamfara",
      name: "Lawali Hassan Anka",
      party: "APC",
      id: 108,
    },
  ];

  function getVotes(userId) {
    setLoading(true);
    console.log("fetching");
    new_supabase
      .from("votes")
      .select("*")
      .eq(`category`, category)
      .eq(`voted`, id)
      .then((suc) => {
        let data = suc.data;
        setVote_count(data);
        setLoading(false);
        console.log("fetched");
      })
      .catch((err) => {});
  }
  //
  React.useEffect(() => {
    getVotes();
  }, []);

  let who = "";
  if (category == "governors") {
    who = allStates.filter((e) => e.id == id);
  } else if (category == "ministers") {
    who = allministers.filter((e) => e.id == id);
  } else if (category == "lga") {
    who = all_lga.filter((e) => e.id == id);
  } else if (category == "senators") {
    who = allsen.filter((e) => e.id == id);
  } else if (category === "role-model") {
    who = allRoleModel.filter((e) => e.id == id);
  }

  let vote = "";
  if (loading === false) {
    if (vote_count === null) {
      vote = "-/-";
    } else {
      vote = vote_count.filter((e) => e.voted == id).length;
    }
  }
  // setwhoState(who)

  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });

  return (
    <>
      <div id="main"></div>
      {/* {loading === false && <>{console.log(vote_count)}</>} */}
      <NavigationBar />

      <div
        className="lga-news"
        style={{
          padding: "50px 0",
          position: "fixed",
          right: "0px",
          width: "24%",
          top: "88px",
          height: "70%",
          overflow: "auto",
        }}
      >
        <Container>
          <Grid container>
            {/* <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={images.rufus}
                title="Dividends of democracy awards holds in Abuja - The Nation Newspaper"
                link=" https://thenationonlineng.net/dividends-of-democracy-awards-holds-in-abuja/"
              />
            </div> */}

            <div item md={3} sm={6} xs={12}>
              <ValuesCard
                image={images.project}
                title="LEGACY"
                text={
                  "No matter how rough it's been, there are those who have strived to build a lasting history. Join us to make history as we celebrate these legends."
                }
              />
            </div>
          </Grid>
        </Container>
      </div>

      <div
        className="lga-news"
        style={{
          padding: "50px 0",
          position: "fixed",
          left: "0px",
          width: "25%",
          top: "88px",
          height: "70%",
          overflow: "auto",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight={600}
            style={{ paddingBottom: 20 }}
          >
            Latest News
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ paddingBottom: 50, fontSize: "14px" }}
          >
            Check out what the media is saying about us.
          </Typography>
          <Grid container>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.rufus}
                title="Dividends of democracy awards holds in Abuja - The Nation Newspaper"
                link=" https://thenationonlineng.net/dividends-of-democracy-awards-holds-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.news2}
                title="Dividends of Democracy Awards to hold in Abuja - Vanguard News"
                link="https://www.vanguardngr.com/2022/01/dividends-of-democracy-awards-to-hold-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.news2}
                title="Dividends of Democracy Awards Debuts in Abuja"
                link="https://www.naijalivetv.com/dividends-of-democracy-awards-debuts-in-abuja/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.news2}
                title="Dividends Of Democracy Awards debuts"
                link="https://guardian.ng/news/dividends-of-democracy-awards-debuts/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.news2}
                title="Dividends of democracy award holds in Abuja June 15"
                link="https://www.sunnewsonline.com/dividends-of-democracy-award-holds-in-abuja-june-15/"
              />
            </div>
            <div item md={4} sm={6} xs={12}>
              <BlogCard
                image={newsimages.rufus}
                title="Group urges Nigerians to vote against anti people politicians, policies."
                link="https://thelaurel.com.ng/group-urges-nigerians-to-vote-against-anti-people-politicians-policies/"
              />
            </div>
          </Grid>
        </Container>
      </div>

      <div
        className="tableholder"
        style={{
          height: "",
          //  background: "red",
          padding: "14px",
          textAlign: " ",
          marginTop: "20px",
        }}
      >
        <div style={{ textAlign: "center" }} role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb
              component="a"
              href="/category/1"
              label="Categories"
            />
            <StyledBreadcrumb
              component="a"
              label={category}
              href={`/${category}`}
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>
        <div
          style={{
            height: "",
            //  background: "red",
            padding: "14px",
            textAlign: " ",
            boxShadow: " 1px 1px 3px #888888",
            marginTop: "20px",
          }}
        >
          <br />

          <Container>
            <Grid container spacing={6}>
              {category == "lga" && (
                <> 

                  <Grid item md={6} xs={12}>
                    <img
                      className="img"
                      src={lagimage}
                      alt=""
                      style={{
                        // height: "370px",
                        objectFit: "fit",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                     <Typography
                      variant="body1"
                      style={{ paddingBottom: "20px",textAlign:"left",marginTop:"10px" }}
                    >
                      <b>{who[0].state} state</b>
                    </Typography>
                  </Grid>
                </>
              )}

              {category == "senators" && (
                <> 

                  <Grid item md={6} xs={12}>
                    <img
                      className="img"
                      src={lagimage}
                      alt=""
                      style={{
                        // height: "370px",
                        objectFit: "fit",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                     <Typography
                      variant="body1"
                      style={{ paddingBottom: "20px",textAlign:"left",marginTop:"10px" }}
                    >
                      <b>{who[0].name}</b>
                    </Typography>
                  </Grid>
                </>
              )}

              {category == "role-model" && (
                <>
                  <Grid item md={6} xs={12}>
                    <img
                      className="img"
                      src={who[0].image}
                      alt=""
                      style={{
                        // height: "370px",
                        objectFit: "fit",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                    <Typography
                      variant="body1"
                      style={{ paddingBottom: "20px",textAlign:"left",marginTop:"10px" }}
                    >
                      <b>{who[0].state}</b>
                    </Typography>
                  </Grid>
                </>
              )}

              {category == "governors" && (
                <>
                  <Grid item md={6} xs={12}>
                    <img
                      className="img"
                      src={who[0].image}
                      alt=""
                      style={{
                        // height: "370px",
                        objectFit: "fit",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                    <Typography
                      variant="body1"
                      style={{ paddingBottom: "20px",textAlign:"left",marginTop:"10px" }}
                    >
                      <b>{who[0].gov}</b>
                    </Typography>
                  </Grid>
                </>
              )}
              {category == "ministers" && (
                <>
                  <Grid item md={6} xs={12}>
                    <img
                      className="img"
                      src={who[0].image}
                      alt=""
                      style={{
                        // height: "370px",
                        objectFit: "fit",
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                    <Typography
                      variant="body1"
                      style={{ paddingBottom: "20px",textAlign:"left",marginTop:"10px" }}
                    >
                      <b>{who[0].gov}</b>
                    </Typography>
                  </Grid>
                </>
              )}

              <Grid item md={6} xs={12}>
                {category == "lga" && (
                  <>
                    {" "}
                    <Typography
                      variant="h4"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        // paddingBottom: 20,
                        paddingTop: 0,
                        marginBottom:"20px"
                      }}
                    >
                      {who[0].label} local government area
                    </Typography>
                  </>
                )}

                {category == "senators" && (
                  <>
                    {" "}
                    <Typography
                      variant="h4"
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        // paddingBottom: 20,
                        paddingTop: 0,
                        marginBottom:"20px"
                      }}
                    >
                      {who[0].Label} senatoral district
                    </Typography>
                  </>
                )}

                {category == "governors" && (
                  <>
                    {" "}
                    <Typography
                      variant="h4"
                      style={{
                        fontSize: "25px",
                        fontWeight: "700",
                        paddingBottom: 20,
                        // paddingTop: 30,
                      }}
                    >
                      {who[0].state} state governor
                    </Typography>
                  </>
                )}

                

                {category == "ministers" && (
                  <>
                    {" "}
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "25px",
                        fontWeight: "700",
                        paddingBottom: 20,
                        // paddingTop: 30,
                      }}
                    >
                      Minister of {who[0].state}
                    </Typography>
                  </>
                )}

                {category == "role-model" && (
                  <>
                    {" "}
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "25px",
                        fontWeight: "700",
                        paddingBottom: 20,
                        // paddingTop: 30,
                      }}
                    >
                      {who[0].gov}
                    </Typography>
                  </>
                )}

                <div
                  style={{
                    width: "50%",
                    padding: "7px 15px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EmojiEventsIcon
                    style={{ marginRight: 10, color: "#E33C1C" }}
                  />
                  <Typography variant="body1" style={{ color: "#188A4C" }}>
                    {loading === true ? (
                      <>
                        <small>loading...</small>
                      </>
                    ) : (
                      <>
                        {vote < 1 ? (
                          "0 Vote"
                        ) : (
                          <>{vote == 1 ? "1 Vote" : <>{vote} </>}</>
                        )}
                      </>
                    )}
                  </Typography>
                </div>

                <>
                  {loading === true ? (
                    <>
                      <ContainedButton
                        text={"Vote"}
                        textStyle={{ color: "#fff" }}
                        styles={{
                          backgroundColor: "#188A4C",
                          opacity: "0.4",
                          cursor: "no-drop",
                          marginTop: "20px",
                          float: "left",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <ContainedButton
                        text={"Vote"}
                        textStyle={{ color: "#fff" }}
                        styles={{
                          backgroundColor: "#188A4C",
                          marginTop: "20px",
                          float: "left",
                        }}
                        onClick={() => setModal(true)}
                      />
                    </>
                  )}
                </>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      {/* <Footer /> */}

      {modal === true && (
        <>
          <div className="voteModal">
            <div className="modalChild">
              <span
                onClick={() => {
                  setModal(false);
                }}
                className="closeModal"
              >
                <Close />
              </span>
              <Typography style={{ padding: "10px", textAlign: "center" }}>
                Enter number of votes
              </Typography>
              <Divider />
              <div
                style={{
                  fontSize: "14px",
                  color: "crimson",
                  textAlign: "center",
                }}
              >
                {" "}
                {errorEmail}
              </div>
              <TextField
                className="modalInput"
                label="Number of votes"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />{" "}
              <br />
              <br />
              <TextField
                className="modalInput"
                label="Your email"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorEmail("");
                }}
              />
              <br />
              <br />
              <br />
              <div className="modalButtonHolder">
                <Button
                  onClick={() => {
                    setModal(false);
                  }}
                  id="modalButton"
                  variant="outlined"
                >
                  Close
                </Button>

                <PaystackConsumer {...componentProps}>
                  {({ initializePayment }) => (
                    <Button
                      onClick={() => {
                        const validateEmail = (email) => {
                          let regexEmail =
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                          if (email.match(regexEmail)) {
                            return true;
                          } else {
                            return false;
                          }
                        };
                        if (number > 0) {
                          console.log(number);
                          if (!validateEmail(email)) {
                            setErrorEmail("Please enter a valid email address");
                          } else {
                            setErrorEmail("");
                            setModal(false);
                            initializePayment(handleSuccess, handleClose);
                          }
                        } else {
                          setStates({
                            ...compState,
                            topupErr: true,
                          });
                          setErrorEmail("Please enter number of votes");
                          window.navigator.vibrate([200]);
                        }
                      }}
                      id="modalButton"
                      variant="outlined"
                    >
                      Continue
                    </Button>
                  )}
                </PaystackConsumer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Category;
