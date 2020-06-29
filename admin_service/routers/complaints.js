const express = require("express");
const router = express.Router();
const Complaint = require("../models/complaintsmodel");
const axios = require("axios")

// POST route for creation of new user complaints
router.post("/create/:id", async (req, res) => {
    try {
        const user = await axios.get(`http://localhost:6000/users/search/${req.params.id}`)
        const complaint = await new Complaint({
            userId: user._id,
            email: req.body.email,
            title: req.body.title,
            body: req.body.userId,
            orderId: req.body.orderId
        })
        const savedComplaint = await complaint.save()
        
    } catch (error) {
        res.status(403).send()
    }
})

// GET route to find all pending complaints 
router.get("/pending", async (req, res) => {
    try {
        let complaintArray = []
        let finalArray = []
        const complaints = Complaints.find({ status: "pending" })
        complaints.forEach(maincomplaint => {
            let filteredComplaints = complaints.filter(complaint => complaint.orderId == maincomplaint.orderId)
            maincomplaint.numberOfPosts = filteredComplaints.length;
            complaintArray.push(maincomplaint)
        })
        let sortedComplaintArray = complaintArray.sort(function (a, b) {
            a = new Date(a.date);
            b = new Date(b.date);
            return a > b ? -1 : a < b ? 1 : 0;
        });
        sortedComplaintArray.forEach(complaint => {
            if (finalArray.filter(item => item.orderId === complaint.orderId).length == 0) {
                finalArray.push(complaint)
            };
        })
        res.send(finalArray)
    } catch (error) {
        console.log(error);

    }
})
// GET route to find individual complaint and all complaints with same objectId 
router.get("/pending/details/orderId", async (req, res) => {
    try {
        const complaints = await Complaints.
            find({ orderId: req.params.orderId }).
            sort({ date: -1 });
        res.send(complaints)
    } catch (error) {
        console.log();

    }
})

router.post("/respond", async (req, res) => {
    try {
        const output = `New message from Foodcrowdy admin
        Message body: ${req.body.reply}`

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Foodcrowdy customer care" <foo@example.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: output, // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    } catch (error) {
        res.status(403).send()
    }
})



module.exports = router