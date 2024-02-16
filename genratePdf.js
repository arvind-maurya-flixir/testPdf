const axios = require('axios');
const fs = require('fs');
let pdfHtmlCodeToGenrate = [];
const staticData = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <title>Multi-Page PDF</title>
  <style>
    body {
      margin: 0;
      padding: 0;
    }
    .page {
        width: 400mm; 
      height: 580mm;
      page-break-after: always;
      position: relative;
    }
    .table-container {
      float: left; /* Use float for horizontal layout */
      width: 50%; /* Adjust width as needed */
    }
    .center-container {
      text-align: center;
    }
    .center-container img {
      width: 80px;
      display: inline-block;
      vertical-align: middle;
    }
    .text-container {
      display: inline-block;
      vertical-align: middle;
      text-align: left; /* Align text to the left within the container */
    }
    .center-container h5 {
      color: rgb(32, 108, 194);
      font-size: 30px;
      margin: 0; /* Remove margin for text */
    }
    tbody>tr:nth-child(even){
        background-color: #d8d4d4;
    }
    .signclass > * {
        height: 100%;
    }
    .draft{
    position: absolute;
    z-index: -4;
    font-size: 500px;
    font-weight: bolder;
    -webkit-transform: rotate(-45deg); 
    -moz-transform: rotate(-45deg);    
   color: #f0eded;
   left: -130px;
    }
  </style>
</head>
<body>
    <div class="page" >
        <div class="center-container">
            <img src="https://i.postimg.cc/XYbjYVkL/Microsoft-Teams-image-1.jpg" alt="Logo">
            <div class="text-container">
              <h5>MAHARASHTRA STATE BOARD OF SECONDARY</h5>
              <h5>AND HIGHER SECONDARY EDUCATION, PUNE</h5>
            </div>
          </div>
        <div style="font-size: 30px; text-align: center; padding: 0; margin: 0;"> ORAL/INTERNAL/PRACTICAL MARK LIST IN
        </div>
        <div style="text-align: center;">
            <div>
                <h3 style="font-size: 30px; color: rgb(32, 108, 194);"> Marks Entry For The Subject : <span
                        style="color: black;"> 38-HISTORY (MARCH-2024) </span>
                </h3>
            </div>
        </div>
        <table
            style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
            <thead>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">H.S.C
                    EXAM</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">DIVISION
                    CODE-NAME</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">JR.COLL
                    NO.</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MEDIUM
                    CODE-NAME</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MARKS
                    OUT OF</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">PAGE NO.
                </th>
            </thead>
            <tbody>
                <tr>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        2-HSC</td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        9-KONKAN</td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        00001</td>
                </tr>
            </tbody>
        </table>
        <div>
            <div class="table-container" style="width: 49%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                01</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002099</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                02</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002100</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                03</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002102</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                04</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002103</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                05</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002104</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                06</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002105</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                07</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002106</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                08</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002107</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                09</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002108</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                10</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002110</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                11</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002111</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                12</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002112</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                13</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002113</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                14</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002114</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                15</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002115</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                16</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002117</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                17</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002118</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                18</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002119</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                19</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002120</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                20</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002121</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                21</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002122</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                22</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002123</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                23</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002124</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                24</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002125</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-container" style="width: 49%; margin-left: 2%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                01</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002099</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                02</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002100</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                03</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002102</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                04</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002103</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                05</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002104</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                06</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002105</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                07</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002106</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                08</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002107</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                09</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002108</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                10</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002110</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                11</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002111</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                12</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002112</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                13</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002113</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                14</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002114</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                15</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002115</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                16</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002117</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                17</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002118</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                18</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002119</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                19</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002120</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                20</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002121</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                21</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002122</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                22</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002123</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                23</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002124</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                24</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002125</td>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <p style="color: rgb(32, 108, 194); margin: 0; margin-bottom: 5px; font-size: 25px;
    font-weight: 500;  float: left; width: 100%; ">
                 Note: 1. AA = ABSENT 2. HH = HUNDRED MARKS
            </p>
        </div>
        <div class="signclass" style=" width: 100%; height: 250px;">
            <div style="float: left; width: 32%; border: 1px solid #dee2e6;">
                <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px; ">Full
                    Signature & Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
            </div>
            <div style="float: left; width: 32%; border: 1px solid #dee2e6; margin-left: 20px;">
                <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px;">Full
                    Signature & Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
            </div>
            <div
                style=" text-align: center; float: left; width: 32%; border: 1px solid #dee2e6; padding-bottom: 10px; font-weight: 500; margin-left: 20px; font-size: 30px;">
                Stamp And Signature
            </div>
    
        </div>
        <div class="draft">
            DRAFT
        </div>
    </div>
    <div class="page" >
        <div class="center-container">
            <img src="https://i.postimg.cc/XYbjYVkL/Microsoft-Teams-image-1.jpg" alt="Logo">
            <div class="text-container">
              <h5>MAHARASHTRA STATE BOARD OF SECONDARY</h5>
              <h5>AND HIGHER SECONDARY EDUCATION, PUNE</h5>
            </div>
          </div>
        <div style="font-size: 30px; text-align: center; padding: 0; margin: 0;"> ORAL/INTERNAL/PRACTICAL MARK LIST IN
        </div>
        <div style="text-align: center;">
            <div>
                <h3 style="font-size: 30px; color: rgb(32, 108, 194);"> Marks Entry For The Subject : <span
                        style="color: black;"> 38-HISTORY (MARCH-2024) </span>
                </h3>
            </div>
        </div>
        <table
            style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
            <thead>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">H.S.C
                    EXAM</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">DIVISION
                    CODE-NAME</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">JR.COLL
                    NO.</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MEDIUM
                    CODE-NAME</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MARKS
                    OUT OF</th>
                <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">PAGE NO.
                </th>
            </thead>
            <tbody>
                <tr>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        2-HSC</td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        9-KONKAN</td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                    </td>
                    <td
                       style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                        00001</td>
                </tr>
            </tbody>
        </table>
        <div>
            <div class="table-container" style="width: 49%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                01</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002099</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                02</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002100</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                03</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002102</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                04</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002103</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                05</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002104</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                06</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002105</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                07</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002106</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                08</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002107</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                09</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002108</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                10</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002110</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                11</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002111</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                12</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002112</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                13</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002113</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                14</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002114</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                15</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002115</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                16</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002117</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                17</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002118</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                18</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002119</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                19</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002120</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                20</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002121</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                21</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002122</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                22</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002123</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                23</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002124</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                24</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002125</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table-container" style="width: 49%; margin-left: 2%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                01</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002099</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                02</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002100</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                03</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002102</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                04</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002103</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                05</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002104</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                06</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002105</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                07</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002106</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                08</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002107</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                09</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002108</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                10</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002110</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                11</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002111</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                12</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002112</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                13</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002113</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                14</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002114</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                15</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002115</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                16</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002117</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                17</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002118</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                18</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002119</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                19</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002120</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                20</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002121</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                21</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002122</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                22</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002123</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                23</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002124</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                        <tr>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                24</td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                                W002125</td>
                            <td
                                style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                            <td
                                 style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <p style="color: rgb(32, 108, 194); margin: 0; margin-bottom: 5px; font-size: 25px;
    font-weight: 500;  float: left; width: 100%; ">
                 Note: 1. AA = ABSENT 2. HH = HUNDRED MARKS
            </p>
        </div>
        <div style=" width: 100%;">
            <div style="float: left; width: 32%; border: 1px solid #dee2e6;">
                <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px; ">Full
                    Signature & Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
            </div>
            <div style="float: left; width: 32%; border: 1px solid #dee2e6; margin-left: 20px;">
                <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px;">Full
                    Signature & Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
                <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
            </div>
            <div
                style=" text-align: center; float: left; width: 32%; height: 250px; border: 1px solid #dee2e6; padding-bottom: 10px; font-weight: 500; margin-left: 20px; font-size: 30px;">
                Stamp And Signature
            </div>
    
        </div>
    </div>
</body>
</html>
`;
let topData = `<div class="page" >
<div class="center-container">
    <img src="https://i.postimg.cc/XYbjYVkL/Microsoft-Teams-image-1.jpg" alt="Logo">
    <div class="text-container">
      <h5>MAHARASHTRA STATE BOARD OF SECONDARY</h5>
      <h5>AND HIGHER SECONDARY EDUCATION, PUNE</h5>
    </div>
  </div>
<div style="font-size: 30px; text-align: center; padding: 0; margin: 0;"> ORAL/INTERNAL/PRACTICAL MARK LIST IN
</div>
<div style="text-align: center;">
    <div>
        <h3 style="font-size: 30px; color: rgb(32, 108, 194);"> Marks Entry For The Subject : <span
                style="color: black;"> 38-HISTORY (MARCH-2024) </span>
        </h3>
    </div>
</div>
<table
    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
    <thead>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">H.S.C
            EXAM</th>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">DIVISION
            CODE-NAME</th>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">JR.COLL
            NO.</th>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MEDIUM
            CODE-NAME</th>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MARKS
            OUT OF</th>
        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">PAGE NO.
        </th>
    </thead>
    <tbody>
        <tr>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                2-HSC</td>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                9-KONKAN</td>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
            </td>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
            </td>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
            </td>
            <td
               style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
                00001</td>
        </tr>
    </tbody>
</table>
<div>
        `
const signFooter = ` <div class="signclass" style=" width: 100%;">
<div style="float: left; width: 32%; border: 1px solid #dee2e6;">
    <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px; ">Full
        Signature & Date</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
</div>
<div style="float: left; width: 32%; border: 1px solid #dee2e6; margin-left: 20px;">
    <p style="margin: 0; padding-left: 5px; border-bottom: 1px solid #dee2e6; font-weight: 500; font-size: 30px;">Full
        Signature & Date</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Name</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Sign</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">Date</p>
    <p style="margin: 0; margin-left: 5px; font-size: 30px; margin-top: 4px;">External Examiner</p>
</div>
<div
    style=" text-align: center; float: left; width: 32%; border: 1px solid #dee2e6; padding-bottom: 10px; font-weight: 500; margin-left: 20px; font-size: 30px;">
    Stamp And Signature
</div>

</div>`;
const noteFooter = ` <div>
<p style="color: rgb(32, 108, 194); margin: 0; margin-bottom: 5px; font-size: 25px;
font-weight: 500;  float: left; width: 100%; ">
     Note: 1. AA = ABSENT 2. HH = HUNDRED MARKS
</p>
</div>`
const bottomdata = `</div>`
const tablePart1 = `
<div class="table-container" style="width: 49%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>`;
const tablePart1table2 = `
<div class="table-container" style="width: 49%; margin-left: 2%;">
                <table
                    style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
                    <thead>
                        <th
                            style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 10%;">
                            SR.NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">
                            SEAT NO.</th>
                        <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6; width: 25%; text-align: center;"
                        colspan="2">MARKS
                        </th>
                    </thead>
                    <tbody>`
const tablepartTow = `
                    </tbody>
            </table>
        </div>`
function pdfHtmlGenrateDataStringGenrator(data){
let currentHtmlcode = "";
 if(data.length>24){
    let tablerowData = "";
    for(let i = 0; i<24; i++){
       tablerowData+= `<tr>
       <td  style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].SrNo}</td>
       <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].Seat}</td>
       <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
       </td>
       <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
       </td>
       </tr>`
    }
    currentHtmlcode+=tablePart1+tablerowData+tablepartTow;
    tablerowData = ""
    for(let i = 24; i<data.length; i++){
        tablerowData+= `<tr>
        <td  style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].SrNo}</td>
        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].Seat}</td>
        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
        </td>
        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
        </td>
        </tr>`
    }
    currentHtmlcode+=tablePart1table2+tablerowData+tablepartTow;
 }else{
    let tablerowData = ""
    for(let i = 0; i<data.length; i++){
        tablerowData+= `<tr>
                        <td  style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: center; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].SrNo}</td>
                        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;" >${data[i].Seat}</td>
                        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                        </td>
                        <td style=" padding: 0px; padding-bottom: 7px; padding-left: 8px; padding-top: 7px; text-align: left; width: 50px; border: 1px solid #dee2e6; font-size: 30px;">
                        </td>
                        </tr>`
    }
    currentHtmlcode+=tablePart1+tablerowData+tablepartTow;
 }
 pdfHtmlCodeToGenrate.push(topData+currentHtmlcode+bottomdata+noteFooter+signFooter+bottomdata)
}
function processDataInBatches(dataArray) {
for (let i = 0; i < dataArray.length; i += 48) {
    const dataBatch = dataArray.slice(i, i + 48);
    pdfHtmlGenrateDataStringGenrator(dataBatch);
}

}
const generateUniqueFilePath = () => {
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, ''); // Format: YYYYMMDD
    const timePart = now.toISOString().slice(11, 19).replace(/:/g, ''); // Format: HHMMSS
    const uniqueString = `${"OutPutReport"}_${datePart}_${timePart}`;
    return `./tmp/${uniqueString}.pdf`;
};
async function generatePDF(req,res) {
   try {
    // const Page = "00102"
    // const ApiData = await getData(Page);
    // const pagesData = ApiData.data[1].data;
    // console.log(pagesData);
    // processDataInBatches(ApiData.data[2].data);
    // if(pagesData.length>0){
    //     for(let i = 0; i<pagesData.length; i++){
    //         const LooppData = await getData(pagesData[i].Page);
    //         console.log(LooppData);
    //         topData = `<div class="page" >
    //         <div class="center-container">
    //             <img src="https://i.postimg.cc/XYbjYVkL/Microsoft-Teams-image-1.jpg" alt="Logo">
    //             <div class="text-container">
    //               <h5>MAHARASHTRA STATE BOARD OF SECONDARY</h5>
    //               <h5>AND HIGHER SECONDARY EDUCATION, PUNE</h5>
    //             </div>
    //           </div>
    //         <div style="font-size: 30px; text-align: center; padding: 0; margin: 0;"> ORAL/INTERNAL/PRACTICAL MARK LIST IN
    //         </div>
    //         <div style="text-align: center;">
    //             <div>
    //                 <h3 style="font-size: 30px; color: rgb(32, 108, 194);"> Marks Entry For The Subject : <span
    //                         style="color: black;"> 38-HISTORY (MARCH-2024) </span>
    //                 </h3>
    //             </div>
    //         </div>
    //         <table
    //             style="border: 1px solid #dee2e6; border-collapse: collapse; box-sizing: border-box; border-spacing: 2px; display: table; margin-bottom: 20px; width: 100%;">
    //             <thead>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">H.S.C
    //                     EXAM</th>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">DIVISION
    //                     CODE-NAME</th>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">JR.COLL
    //                     NO.</th>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MEDIUM
    //                     CODE-NAME</th>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">MARKS
    //                     OUT OF</th>
    //                 <th style="color: rgb(32, 108, 194); padding: 5px; font-size: 30px; border: 1px solid #dee2e6;">PAGE NO.
    //                 </th>
    //             </thead>
    //             <tbody>
    //                 <tr>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${LooppData.data[0].data[0].EXAM}</td>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${LooppData.data[0].data[0].DIVISION}</td>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${LooppData.data[0].data[0].SCHOOLNO}
    //                     </td>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${LooppData.data[0].data[0].MEDIUM}
    //                     </td>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${LooppData.data[0].data[0].MarksOutOf}
    //                        </td>
    //                     <td
    //                        style="padding: 0px; padding-bottom: 5px; padding-top: 5px; text-align: center; border: 1px solid #dee2e6; font-size: 30px;">
    //                        ${pagesData[i].Page}</td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         <div>
    //     `
    //         processDataInBatches(LooppData.data[2].data);
    //     }
    // }
    // console.log(pdfHtmlCodeToGenrate.join(""));
    const fullHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <title>Multi-Page PDF</title>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        .page {
            width: 400mm; 
          height: 580mm;
          page-break-after: always;
        }
        .table-container {
          float: left; /* Use float for horizontal layout */
          width: 50%; /* Adjust width as needed */
        }
        .center-container {
          text-align: center;
        }
        .center-container img {
          width: 80px;
          display: inline-block;
          vertical-align: middle;
        }
        .text-container {
          display: inline-block;
          vertical-align: middle;
          text-align: left; /* Align text to the left within the container */
        }
        .center-container h5 {
          color: rgb(32, 108, 194);
          font-size: 30px;
          margin: 0; /* Remove margin for text */
        }
        tbody>tr:nth-child(even){
            background-color: #f0eded;
        }
        ..signclass{
            height: 350px;
        }
        .signclass > * {
            height: 100%;
        }
      </style>
    </head>
    <body>
     ${pdfHtmlCodeToGenrate.join("")}
    </body>
    </html>
    `
    const pdfFilePath = generateUniqueFilePath();
    pdfHtmlCodeToGenrate = [];
    const conversion = require("phantom-html-to-pdf")();
    const options = {
        html: staticData,
        paperSize: {
          format: 'A4',
          orientation: 'portrait',
        },
      };
    conversion(options, function(err, pdf) {
        if(err){
            res.status(500).send({ res: 'error', error: 'PDF generation failed' });
           return;
        }
      const output = fs.createWriteStream(pdfFilePath)
      pdf.stream.pipe(output);
      setTimeout(() => {
        fs.unlink(pdfFilePath, (error) => {
          if (error) {
            console.log('Error deleting PDF file:', error);
          } else {
            console.log(pdfFilePath,'PDF file deleted successfully after 1 minutes.');
          }
        });
      }, 1000 * 60 * 1000);
      const filepathelm = pdfFilePath.split('/');
      console.log('pdf genrated');
       res.send({
        res: 'success',
        pdfFilePath: `http://localhost:3001/download/${filepathelm[filepathelm.length-1]}`
       })
    });
   } catch (error) {
     console.log(error);
     res.status(501).send({
        res: 'failed'
       })
   }
}
async function getData(page){
    try {
        const response = await axios.post('http://192.168.1.27:1004/api/v1/IAMarks/IASubjectsMarks', {
            SchId: "2501001",
            HSCSubCode: "48",
            PaperCode: "3",
            Language: "1",
            Page: page
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
}
module.exports = {
    generatePDF
}