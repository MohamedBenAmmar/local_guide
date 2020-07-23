import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

//import { MDBCol, MDBSelectInput, MDBSelect} from "mdbreact";
import FindProfile from "./localguide.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBase: [
        {
          Name: "AymanYaich",
          age: 35,
          gender: "Male",
          languages: ["English", "Arabic", "French"],
          city: "Sousse",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Monastir",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Kairwan",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Sfax",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tunis",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tozeur",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Gafasa",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tataouin",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Gafsa",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Nabeul",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Nabeul",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Tabarka",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
      ],
      newData: [
        {
          Name: "AymanYaich",
          age: 35,
          gender: "Male",
          languages: ["English", "Arabic", "French"],
          city: "Sousse",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Monastir",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Kairwan",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Sfax",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tunis",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tozeur",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Gafasa",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          city: "Tataouin",
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "AmiraAyoubi",
          age: 25,
          gender: "Female",
          languages: ["English", "Arabic", "Russian"],
          imgURL:
            "https://premiumaddons.b-cdn.net/wp-content/uploads/2018/01/beautiful-woman-smiles.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Gafsa",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Nabeul",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Nabeul",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
        {
          Name: "MounaBrahmi",
          age: 29,
          gender: "Female",
          languages: ["English", "Arabic", "French"],
          city: "Tabarka",
          imgURL:
            "https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg",
        },
      ],
      typingButton: false,
      selectCity: "selectCity",
      selectLang: "selectLang",
      selectGender: "selectGender",
    };
  }
  typingMethod() {
    this.setState({
      typingButton: !this.state.typingButton,
    });
    axios
      .post("/search", {
        _idOne: this.state.selectCity,
        _idTwo: this.state.selectLang,
        _idThree: this.state.selectGender,
      })
      .then((result) => {
        this.setState({ newData: result });
      });
  }
  handleChangeCity(e) {
    this.setState({
      selectCity: e.target.value,
    });
  }
  handleChangeLang(e) {
    this.setState({
      selectLang: e.target.value,
    });
  }
  handleChangeGender(e) {
    this.setState({
      selectGender: e.target.value,
    });
  }

  // filterBy() {

  //   var _idOne = this.state.selectCity;
  //   var _idTwo = this.state.selectLang;
  //   var _idThree = this.state.selectGender;
  //   let dataFilter = this.state.dataBase.filter((ele) => {
  //     return (
  //       ele.city === _idOne &&
  //       ele.languages.includes(_idTwo) &&
  //       ele.gender === _idThree
  //     );
  //   });
  //   this.setState({
  //     newData:dataFilter,
  //   })
  // }

  render() {
    if (!this.state.typingButton) {
      return (
        <div>
          <div id="brand">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">
                    Find your local guide
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div id="searchBar">
            <select
              className="browser-default custom-select custom-select-lg mb-3"
              onChange={this.handleChangeCity.bind(this)}
            >
              <option defaultValue>Cities</option>
              <option value="Bizerte">Bizete</option>
              <option value="Djerba/Zarzis/Medenin">
                Djerba/Zarzis/Medenin
              </option>
              <option value="Gabes/Matmata">Gabes/Matmata</option>
              <option value="Gasserine/Sebitla/Dogga">
                Gasserine/Sebitla/Dogga
              </option>
              <option value="Kairawen">Kairawen</option>
              <option value="Kebili">Kebili</option>
              <option value="Kef">Kef</option>
              <option value="Nabel/Hammamet/Klébia">
                Nabel/Hammamet/Klébia
              </option>
              <option value="Sfax/Kerkenah">Sfax/Kerkenah</option>
              <option value="Siliana/Beja">Siliana/Beja</option>
              <option value="Sousse/Monastir/Mahdia">
                Sousse/Monastir/Mahdia
              </option>
              <option value="Tabarka/Ain-Drahem/Jendouba">
                Tabarka/Ain-Drahem/Jendouba
              </option>
              <option value="Tataouin">Tataouin</option>
              <option value="Tozeur/Gafsa">Tozeur/Gafsa</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghwan">Zaghwan</option>
            </select>
            <select
              className="custom-select custom-select-sm"
              onChange={this.handleChangeLang.bind(this)}
            >
              <option defaultValue>Languages</option>
              <option value="Arabic">Arabic</option>
              <option value="Chinese">Chinese</option>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Italian">Italian</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Russian">Russian</option>
              <option value="Spanish">Spanish</option>
            </select>
            <select
              className="custom-select custom-select-sm"
              onChange={this.handleChangeGender.bind(this)}
            >
              <option defaultValue>Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          {/* <button type="button" id="buttonFind">Find</button> */}
          <div id="buttonFind">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.typingMethod.bind(this)}
            >
              Search
            </button>
          </div>
          <p>{this.state.selectCity}</p>
          <p>{this.state.selectLang}</p>
          <p>{this.state.selectGender}</p>
        </div>
      );
    } else {
      return (
        <div>
          <div id="wrapper">
            {this.state.newData.map((data) => {
              return (
                <table>
                  <tr>
                    <th>
                      <FindProfile data={data} />
                    </th>
                  </tr>
                </table>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Search;
