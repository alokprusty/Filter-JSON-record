exports.getRecords = (req, res) => {
    // res.send('Getting')
    if(req.params.pageNumber && Math.sign(req.params.pageNumber) == 1) {
        const jsonData = [
            { id: 1, color: "brown", disposition: "closed" },
            { id: 2, color: "yellow", disposition: "open" },
            { id: 3, color: "brown", disposition: "closed" },
            { id: 4, color: "brown", disposition: "open" },
            { id: 5, color: "red", disposition: "closed" },
            { id: 6, color: "blue", disposition: "open" },
            { id: 7, color: "green", disposition: "closed" },
            { id: 8, color: "green", disposition: "open" },
            { id: 9, color: "brown", disposition: "closed" },
            { id: 10, color: "red", disposition: "open" },
            { id: 11, color: "blue", disposition: "closed" },
            { id: 12, color: "yellow", disposition: "open" },
            { id: 13, color: "green", disposition: "open" },
            { id: 14, color: "yellow", disposition: "open" },
            { id: 15, color: "blue", disposition: "closed" },
            { id: 16, color: "blue", disposition: "closed" },
            { id: 17, color: "blue", disposition: "closed" },
            { id: 18, color: "green", disposition: "open" },
            { id: 19, color: "yellow", disposition: "open" },
            { id: 20, color: "brown", disposition: "closed" },
            { id: 21, color: "green", disposition: "closed" },
            { id: 22, color: "red", disposition: "closed" },
            { id: 23, color: "red", disposition: "open" },
            { id: 24, color: "red", disposition: "open" },
            { id: 25, color: "red", disposition: "open" },
            { id: 26, color: "red", disposition: "closed" },
            { id: 27, color: "brown", disposition: "closed" },
            { id: 28, color: "blue", disposition: "open" },
            { id: 29, color: "brown", disposition: "closed" },
            { id: 30, color: "blue", disposition: "closed" },
            { id: 31, color: "red", disposition: "open" },
            { id: 32, color: "blue", disposition: "open" },
            { id: 33, color: "yellow", disposition: "open" },
            { id: 34, color: "red", disposition: "open" },
            { id: 35, color: "blue", disposition: "open" },
            { id: 36, color: "green", disposition: "closed" },
            { id: 37, color: "green", disposition: "open" },
            { id: 38, color: "blue", disposition: "open" },
            { id: 39, color: "green", disposition: "closed" },
            { id: 40, color: "red", disposition: "closed" },
            { id: 41, color: "brown", disposition: "open" },
            { id: 42, color: "brown", disposition: "closed" },
            { id: 43, color: "green", disposition: "closed" },
            { id: 44, color: "blue", disposition: "closed" },
            { id: 45, color: "blue", disposition: "closed" },
            { id: 46, color: "yellow", disposition: "closed" },
            { id: 47, color: "green", disposition: "open" },
            { id: 48, color: "red", disposition: "closed" },
            { id: 49, color: "blue", disposition: "closed" },
            { id: 50, color: "blue", disposition: "open" },
            { id: 51, color: "green", disposition: "open" },
            { id: 52, color: "yellow", disposition: "open" },
            { id: 53, color: "yellow", disposition: "closed" },
            { id: 54, color: "red", disposition: "open" },
            { id: 55, color: "brown", disposition: "open" },
            { id: 56, color: "brown", disposition: "closed" },
            { id: 57, color: "blue", disposition: "open" },
            { id: 58, color: "brown", disposition: "closed" },
            { id: 59, color: "red", disposition: "open" },
            { id: 60, color: "brown", disposition: "closed" },
            { id: 61, color: "brown", disposition: "open" },
            { id: 62, color: "yellow", disposition: "closed" },
            { id: 63, color: "yellow", disposition: "open" },
            { id: 64, color: "yellow", disposition: "closed" },
            { id: 65, color: "green", disposition: "closed" },
            { id: 66, color: "blue", disposition: "open" },
            { id: 67, color: "green", disposition: "closed" },
            { id: 68, color: "brown", disposition: "open" },
            { id: 69, color: "blue", disposition: "closed" },
            { id: 70, color: "brown", disposition: "closed" },
            { id: 71, color: "green", disposition: "closed" },
            { id: 72, color: "green", disposition: "closed" },
            { id: 73, color: "blue", disposition: "closed" },
            { id: 74, color: "yellow", disposition: "closed" },
            { id: 75, color: "red", disposition: "closed" },
            { id: 76, color: "red", disposition: "open" },
            { id: 77, color: "blue", disposition: "closed" },
            { id: 78, color: "red", disposition: "closed" },
            { id: 79, color: "blue", disposition: "closed" },
            { id: 80, color: "blue", disposition: "open" },
            { id: 81, color: "brown", disposition: "closed" },
            { id: 82, color: "green", disposition: "closed" },
            { id: 83, color: "blue", disposition: "open" },
            { id: 84, color: "brown", disposition: "open" },
            { id: 85, color: "green", disposition: "open" },
            { id: 86, color: "yellow", disposition: "closed" },
            { id: 87, color: "yellow", disposition: "open" },
            { id: 88, color: "green", disposition: "open" },
            { id: 89, color: "yellow", disposition: "open" },
            { id: 90, color: "blue", disposition: "closed" },
            { id: 91, color: "brown", disposition: "closed" },
            { id: 92, color: "brown", disposition: "closed" },
            { id: 93, color: "brown", disposition: "closed" },
            { id: 94, color: "blue", disposition: "open" },
            { id: 95, color: "green", disposition: "open" },
            { id: 96, color: "green", disposition: "closed" },
            { id: 97, color: "red", disposition: "closed" },
            { id: 98, color: "yellow", disposition: "closed" },
            { id: 99, color: "brown", disposition: "open" },
            { id: 100, color: "red", disposition: "open" },
            { id: 101, color: "yellow", disposition: "closed" },
            { id: 102, color: "yellow", disposition: "closed" },
            { id: 103, color: "blue", disposition: "open" },
            { id: 104, color: "yellow", disposition: "closed" },
            { id: 105, color: "green", disposition: "open" },
            { id: 106, color: "yellow", disposition: "open" },
            { id: 107, color: "brown", disposition: "open" },
            { id: 108, color: "red", disposition: "open" },
            { id: 109, color: "green", disposition: "open" },
            { id: 110, color: "brown", disposition: "closed" },
            { id: 111, color: "brown", disposition: "open" },
            { id: 112, color: "yellow", disposition: "open" },
            { id: 113, color: "blue", disposition: "open" },
            { id: 114, color: "yellow", disposition: "open" },
            { id: 115, color: "green", disposition: "closed" },
            { id: 116, color: "red", disposition: "open" },
            { id: 117, color: "blue", disposition: "open" },
            { id: 118, color: "blue", disposition: "open" },
            { id: 119, color: "yellow", disposition: "closed" },
            { id: 120, color: "brown", disposition: "open" },
            { id: 121, color: "blue", disposition: "open" },
            { id: 122, color: "red", disposition: "open" },
            { id: 123, color: "brown", disposition: "open" },
            { id: 124, color: "red", disposition: "closed" },
            { id: 125, color: "blue", disposition: "open" },
            { id: 126, color: "yellow", disposition: "open" },
            { id: 127, color: "brown", disposition: "closed" },
            { id: 128, color: "red", disposition: "open" },
            { id: 129, color: "green", disposition: "closed" },
            { id: 130, color: "green", disposition: "open" },
            { id: 131, color: "red", disposition: "open" },
            { id: 132, color: "red", disposition: "closed" },
            { id: 133, color: "blue", disposition: "closed" },
            { id: 134, color: "yellow", disposition: "closed" },
            { id: 135, color: "brown", disposition: "closed" },
            { id: 136, color: "red", disposition: "open" },
            { id: 137, color: "blue", disposition: "closed" },
            { id: 138, color: "yellow", disposition: "closed" },
            { id: 139, color: "red", disposition: "open" },
            { id: 140, color: "yellow", disposition: "open" },
            { id: 141, color: "red", disposition: "open" },
            { id: 142, color: "red", disposition: "closed" },
            { id: 143, color: "red", disposition: "closed" },
            { id: 144, color: "green", disposition: "closed" },
            { id: 145, color: "yellow", disposition: "closed" },
            { id: 146, color: "green", disposition: "closed" },
            { id: 147, color: "brown", disposition: "closed" },
            { id: 148, color: "yellow", disposition: "open" },
            { id: 149, color: "red", disposition: "closed" },
            { id: 150, color: "green", disposition: "closed" },
            { id: 151, color: "brown", disposition: "open" },
            { id: 152, color: "yellow", disposition: "open" },
            { id: 153, color: "yellow", disposition: "closed" },
            { id: 154, color: "yellow", disposition: "closed" },
            { id: 155, color: "yellow", disposition: "closed" },
            { id: 156, color: "brown", disposition: "closed" },
            { id: 157, color: "green", disposition: "closed" },
            { id: 158, color: "green", disposition: "closed" },
            { id: 159, color: "brown", disposition: "open" },
            { id: 160, color: "green", disposition: "closed" },
            { id: 161, color: "red", disposition: "closed" },
            { id: 162, color: "blue", disposition: "open" },
            { id: 163, color: "green", disposition: "open" },
            { id: 164, color: "red", disposition: "open" },
            { id: 165, color: "red", disposition: "closed" },
            { id: 166, color: "yellow", disposition: "closed" },
            { id: 167, color: "blue", disposition: "open" },
            { id: 168, color: "green", disposition: "closed" },
            { id: 169, color: "green", disposition: "open" },
            { id: 170, color: "green", disposition: "open" },
            { id: 171, color: "blue", disposition: "open" },
            { id: 172, color: "blue", disposition: "closed" },
            { id: 173, color: "green", disposition: "closed" },
            { id: 174, color: "brown", disposition: "open" },
            { id: 175, color: "red", disposition: "closed" },
            { id: 176, color: "red", disposition: "closed" },
            { id: 177, color: "brown", disposition: "closed" },
            { id: 178, color: "brown", disposition: "open" },
            { id: 179, color: "red", disposition: "open" },
            { id: 180, color: "brown", disposition: "closed" },
            { id: 181, color: "green", disposition: "open" },
            { id: 182, color: "green", disposition: "closed" },
            { id: 183, color: "blue", disposition: "open" },
            { id: 184, color: "blue", disposition: "closed" },
            { id: 185, color: "blue", disposition: "closed" },
            { id: 186, color: "blue", disposition: "closed" },
            { id: 187, color: "brown", disposition: "closed" },
            { id: 188, color: "yellow", disposition: "open" },
            { id: 189, color: "red", disposition: "closed" },
            { id: 190, color: "brown", disposition: "open" },
            { id: 191, color: "green", disposition: "closed" },
            { id: 192, color: "red", disposition: "open" },
            { id: 193, color: "green", disposition: "closed" },
            { id: 194, color: "brown", disposition: "closed" },
            { id: 195, color: "brown", disposition: "closed" },
            { id: 196, color: "yellow", disposition: "closed" },
            { id: 197, color: "blue", disposition: "closed" },
            { id: 198, color: "green", disposition: "closed" },
            { id: 199, color: "yellow", disposition: "closed" },
            { id: 200, color: "green", disposition: "open" },
            { id: 201, color: "brown", disposition: "closed" },
            { id: 202, color: "blue", disposition: "closed" },
            { id: 203, color: "red", disposition: "open" },
            { id: 204, color: "green", disposition: "closed" },
            { id: 205, color: "brown", disposition: "closed" },
            { id: 206, color: "brown", disposition: "open" },
            { id: 207, color: "brown", disposition: "open" },
            { id: 208, color: "blue", disposition: "closed" },
            { id: 209, color: "brown", disposition: "closed" },
            { id: 210, color: "blue", disposition: "open" },
            { id: 211, color: "green", disposition: "closed" },
            { id: 212, color: "yellow", disposition: "open" },
            { id: 213, color: "blue", disposition: "open" },
            { id: 214, color: "red", disposition: "closed" },
            { id: 215, color: "red", disposition: "open" },
            { id: 216, color: "yellow", disposition: "open" },
            { id: 217, color: "yellow", disposition: "open" },
            { id: 218, color: "green", disposition: "open" },
            { id: 219, color: "green", disposition: "open" },
            { id: 220, color: "green", disposition: "open" },
            { id: 221, color: "yellow", disposition: "open" },
            { id: 222, color: "red", disposition: "closed" },
            { id: 223, color: "green", disposition: "closed" },
            { id: 224, color: "blue", disposition: "closed" },
            { id: 225, color: "yellow", disposition: "closed" },
            { id: 226, color: "yellow", disposition: "open" },
            { id: 227, color: "red", disposition: "open" },
            { id: 228, color: "blue", disposition: "open" },
            { id: 229, color: "yellow", disposition: "open" },
            { id: 230, color: "blue", disposition: "closed" },
            { id: 231, color: "green", disposition: "open" },
            { id: 232, color: "blue", disposition: "open" },
            { id: 233, color: "yellow", disposition: "closed" },
            { id: 234, color: "yellow", disposition: "closed" },
            { id: 235, color: "brown", disposition: "open" },
            { id: 236, color: "red", disposition: "closed" },
            { id: 237, color: "blue", disposition: "closed" },
            { id: 238, color: "red", disposition: "closed" },
            { id: 239, color: "yellow", disposition: "open" },
            { id: 240, color: "blue", disposition: "open" },
            { id: 241, color: "red", disposition: "open" },
            { id: 242, color: "yellow", disposition: "closed" },
            { id: 243, color: "blue", disposition: "open" },
            { id: 244, color: "yellow", disposition: "open" },
            { id: 245, color: "yellow", disposition: "open" },
            { id: 246, color: "red", disposition: "closed" },
            { id: 247, color: "yellow", disposition: "open" },
            { id: 248, color: "green", disposition: "open" },
            { id: 249, color: "yellow", disposition: "closed" },
            { id: 250, color: "green", disposition: "open" },
            { id: 251, color: "blue", disposition: "open" },
            { id: 252, color: "blue", disposition: "open" },
            { id: 253, color: "green", disposition: "open" },
            { id: 254, color: "green", disposition: "open" },
            { id: 255, color: "yellow", disposition: "open" },
            { id: 256, color: "red", disposition: "open" },
            { id: 257, color: "blue", disposition: "open" },
            { id: 258, color: "blue", disposition: "open" },
            { id: 259, color: "red", disposition: "open" },
            { id: 260, color: "brown", disposition: "open" },
            { id: 261, color: "yellow", disposition: "open" },
            { id: 262, color: "green", disposition: "closed" },
            { id: 263, color: "green", disposition: "open" },
            { id: 264, color: "blue", disposition: "closed" },
            { id: 265, color: "green", disposition: "closed" },
            { id: 266, color: "yellow", disposition: "open" },
            { id: 267, color: "yellow", disposition: "closed" },
            { id: 268, color: "green", disposition: "closed" },
            { id: 269, color: "red", disposition: "closed" },
            { id: 270, color: "blue", disposition: "closed" },
            { id: 271, color: "red", disposition: "open" },
            { id: 272, color: "yellow", disposition: "open" },
            { id: 273, color: "brown", disposition: "closed" },
            { id: 274, color: "red", disposition: "open" },
            { id: 275, color: "red", disposition: "open" },
            { id: 276, color: "yellow", disposition: "open" },
            { id: 277, color: "red", disposition: "open" },
            { id: 278, color: "blue", disposition: "closed" },
            { id: 279, color: "brown", disposition: "closed" },
            { id: 280, color: "brown", disposition: "open" },
            { id: 281, color: "brown", disposition: "closed" },
            { id: 282, color: "red", disposition: "open" },
            { id: 283, color: "blue", disposition: "closed" },
            { id: 284, color: "red", disposition: "closed" },
            { id: 285, color: "blue", disposition: "closed" },
            { id: 286, color: "red", disposition: "open" },
            { id: 287, color: "blue", disposition: "open" },
            { id: 288, color: "yellow", disposition: "open" },
            { id: 289, color: "red", disposition: "closed" },
            { id: 290, color: "red", disposition: "open" },
            { id: 291, color: "brown", disposition: "open" },
            { id: 292, color: "red", disposition: "closed" },
            { id: 293, color: "brown", disposition: "open" },
            { id: 294, color: "brown", disposition: "open" },
            { id: 295, color: "green", disposition: "closed" },
            { id: 296, color: "red", disposition: "closed" },
            { id: 297, color: "brown", disposition: "closed" },
            { id: 298, color: "green", disposition: "closed" },
            { id: 299, color: "brown", disposition: "closed" },
            { id: 300, color: "blue", disposition: "open" },
            { id: 301, color: "green", disposition: "closed" },
            { id: 302, color: "red", disposition: "closed" },
            { id: 303, color: "red", disposition: "open" },
            { id: 304, color: "yellow", disposition: "open" },
            { id: 305, color: "brown", disposition: "open" },
            { id: 306, color: "green", disposition: "open" },
            { id: 307, color: "brown", disposition: "closed" },
            { id: 308, color: "blue", disposition: "open" },
            { id: 309, color: "yellow", disposition: "open" },
            { id: 310, color: "yellow", disposition: "open" },
            { id: 311, color: "red", disposition: "closed" },
            { id: 312, color: "yellow", disposition: "open" },
            { id: 313, color: "red", disposition: "closed" },
            { id: 314, color: "blue", disposition: "open" },
            { id: 315, color: "green", disposition: "open" },
            { id: 316, color: "blue", disposition: "open" },
            { id: 317, color: "red", disposition: "closed" },
            { id: 318, color: "blue", disposition: "open" },
            { id: 319, color: "green", disposition: "closed" },
            { id: 320, color: "red", disposition: "closed" },
            { id: 321, color: "brown", disposition: "open" },
            { id: 322, color: "green", disposition: "open" },
            { id: 323, color: "yellow", disposition: "open" },
            { id: 324, color: "red", disposition: "closed" },
            { id: 325, color: "green", disposition: "closed" },
            { id: 326, color: "green", disposition: "closed" },
            { id: 327, color: "yellow", disposition: "open" },
            { id: 328, color: "yellow", disposition: "closed" },
            { id: 329, color: "brown", disposition: "open" },
            { id: 330, color: "brown", disposition: "closed" },
            { id: 331, color: "blue", disposition: "closed" },
            { id: 332, color: "brown", disposition: "open" },
            { id: 333, color: "blue", disposition: "closed" },
            { id: 334, color: "green", disposition: "open" },
            { id: 335, color: "brown", disposition: "closed" },
            { id: 336, color: "blue", disposition: "open" },
            { id: 337, color: "green", disposition: "open" },
            { id: 338, color: "green", disposition: "closed" },
            { id: 339, color: "green", disposition: "open" },
            { id: 340, color: "red", disposition: "open" },
            { id: 341, color: "yellow", disposition: "open" },
            { id: 342, color: "brown", disposition: "closed" },
            { id: 343, color: "red", disposition: "open" },
            { id: 344, color: "brown", disposition: "open" },
            { id: 345, color: "blue", disposition: "open" },
            { id: 346, color: "green", disposition: "open" },
            { id: 347, color: "yellow", disposition: "open" },
            { id: 348, color: "blue", disposition: "open" },
            { id: 349, color: "brown", disposition: "closed" },
            { id: 350, color: "green", disposition: "closed" },
            { id: 351, color: "blue", disposition: "closed" },
            { id: 352, color: "brown", disposition: "closed" },
            { id: 353, color: "blue", disposition: "closed" },
            { id: 354, color: "brown", disposition: "open" },
            { id: 355, color: "blue", disposition: "open" },
            { id: 356, color: "red", disposition: "open" },
            { id: 357, color: "green", disposition: "open" },
            { id: 358, color: "blue", disposition: "closed" },
            { id: 359, color: "brown", disposition: "open" },
            { id: 360, color: "red", disposition: "closed" },
            { id: 361, color: "brown", disposition: "open" },
            { id: 362, color: "green", disposition: "open" },
            { id: 363, color: "yellow", disposition: "open" },
            { id: 364, color: "blue", disposition: "open" },
            { id: 365, color: "green", disposition: "closed" },
            { id: 366, color: "blue", disposition: "closed" },
            { id: 367, color: "blue", disposition: "open" },
            { id: 368, color: "red", disposition: "open" },
            { id: 369, color: "green", disposition: "closed" },
            { id: 370, color: "red", disposition: "closed" },
            { id: 371, color: "brown", disposition: "closed" },
            { id: 372, color: "red", disposition: "open" },
            { id: 373, color: "yellow", disposition: "open" },
            { id: 374, color: "blue", disposition: "open" },
            { id: 375, color: "green", disposition: "open" },
            { id: 376, color: "yellow", disposition: "open" },
            { id: 377, color: "blue", disposition: "open" },
            { id: 378, color: "blue", disposition: "closed" },
            { id: 379, color: "green", disposition: "closed" },
            { id: 380, color: "green", disposition: "open" },
            { id: 381, color: "blue", disposition: "open" },
            { id: 382, color: "green", disposition: "open" },
            { id: 383, color: "blue", disposition: "closed" },
            { id: 384, color: "blue", disposition: "closed" },
            { id: 385, color: "brown", disposition: "closed" },
            { id: 386, color: "red", disposition: "closed" },
            { id: 387, color: "red", disposition: "closed" },
            { id: 388, color: "green", disposition: "open" },
            { id: 389, color: "brown", disposition: "open" },
            { id: 390, color: "green", disposition: "open" },
            { id: 391, color: "red", disposition: "closed" },
            { id: 392, color: "blue", disposition: "open" },
            { id: 393, color: "yellow", disposition: "closed" },
            { id: 394, color: "green", disposition: "open" },
            { id: 395, color: "yellow", disposition: "closed" },
            { id: 396, color: "red", disposition: "closed" },
            { id: 397, color: "red", disposition: "open" },
            { id: 398, color: "green", disposition: "open" },
            { id: 399, color: "brown", disposition: "open" },
            { id: 400, color: "yellow", disposition: "closed" },
            { id: 401, color: "brown", disposition: "closed" },
            { id: 402, color: "yellow", disposition: "closed" },
            { id: 403, color: "red", disposition: "closed" },
            { id: 404, color: "blue", disposition: "open" },
            { id: 405, color: "brown", disposition: "open" },
            { id: 406, color: "blue", disposition: "open" },
            { id: 407, color: "blue", disposition: "closed" },
            { id: 408, color: "yellow", disposition: "open" },
            { id: 409, color: "green", disposition: "closed" },
            { id: 410, color: "red", disposition: "open" },
            { id: 411, color: "green", disposition: "open" },
            { id: 412, color: "green", disposition: "open" },
            { id: 413, color: "blue", disposition: "closed" },
            { id: 414, color: "blue", disposition: "open" },
            { id: 415, color: "yellow", disposition: "open" },
            { id: 416, color: "brown", disposition: "closed" },
            { id: 417, color: "red", disposition: "closed" },
            { id: 418, color: "green", disposition: "open" },
            { id: 419, color: "green", disposition: "open" },
            { id: 420, color: "yellow", disposition: "closed" },
            { id: 421, color: "green", disposition: "open" },
            { id: 422, color: "red", disposition: "open" },
            { id: 423, color: "yellow", disposition: "open" },
            { id: 424, color: "green", disposition: "closed" },
            { id: 425, color: "green", disposition: "open" },
            { id: 426, color: "blue", disposition: "closed" },
            { id: 427, color: "red", disposition: "closed" },
            { id: 428, color: "brown", disposition: "closed" },
            { id: 429, color: "green", disposition: "closed" },
            { id: 430, color: "red", disposition: "open" },
            { id: 431, color: "blue", disposition: "open" },
            { id: 432, color: "green", disposition: "open" },
            { id: 433, color: "yellow", disposition: "open" },
            { id: 434, color: "brown", disposition: "closed" },
            { id: 435, color: "yellow", disposition: "closed" },
            { id: 436, color: "red", disposition: "open" },
            { id: 437, color: "yellow", disposition: "closed" },
            { id: 438, color: "yellow", disposition: "closed" },
            { id: 439, color: "green", disposition: "closed" },
            { id: 440, color: "brown", disposition: "closed" },
            { id: 441, color: "blue", disposition: "open" },
            { id: 442, color: "red", disposition: "closed" },
            { id: 443, color: "brown", disposition: "closed" },
            { id: 444, color: "blue", disposition: "closed" },
            { id: 445, color: "red", disposition: "open" },
            { id: 446, color: "green", disposition: "closed" },
            { id: 447, color: "brown", disposition: "open" },
            { id: 448, color: "brown", disposition: "open" },
            { id: 449, color: "blue", disposition: "closed" },
            { id: 450, color: "blue", disposition: "closed" },
            { id: 451, color: "green", disposition: "open" },
            { id: 452, color: "yellow", disposition: "open" },
            { id: 453, color: "yellow", disposition: "closed" },
            { id: 454, color: "green", disposition: "closed" },
            { id: 455, color: "blue", disposition: "open" },
            { id: 456, color: "red", disposition: "closed" },
            { id: 457, color: "green", disposition: "open" },
            { id: 458, color: "blue", disposition: "closed" },
            { id: 459, color: "green", disposition: "open" },
            { id: 460, color: "green", disposition: "open" },
            { id: 461, color: "yellow", disposition: "open" },
            { id: 462, color: "green", disposition: "open" },
            { id: 463, color: "green", disposition: "open" },
            { id: 464, color: "red", disposition: "open" },
            { id: 465, color: "red", disposition: "open" },
            { id: 466, color: "blue", disposition: "closed" },
            { id: 467, color: "yellow", disposition: "open" },
            { id: 468, color: "blue", disposition: "closed" },
            { id: 469, color: "brown", disposition: "closed" },
            { id: 470, color: "green", disposition: "open" },
            { id: 471, color: "yellow", disposition: "closed" },
            { id: 472, color: "red", disposition: "open" },
            { id: 473, color: "red", disposition: "closed" },
            { id: 474, color: "yellow", disposition: "open" },
            { id: 475, color: "brown", disposition: "open" },
            { id: 476, color: "brown", disposition: "closed" },
            { id: 477, color: "red", disposition: "open" },
            { id: 478, color: "brown", disposition: "closed" },
            { id: 479, color: "brown", disposition: "open" },
            { id: 480, color: "blue", disposition: "open" },
            { id: 481, color: "blue", disposition: "open" },
            { id: 482, color: "red", disposition: "open" },
            { id: 483, color: "yellow", disposition: "closed" },
            { id: 484, color: "blue", disposition: "closed" },
            { id: 485, color: "blue", disposition: "closed" },
            { id: 486, color: "yellow", disposition: "open" },
            { id: 487, color: "green", disposition: "closed" },
            { id: 488, color: "brown", disposition: "open" },
            { id: 489, color: "brown", disposition: "closed" },
            { id: 490, color: "brown", disposition: "closed" },
            { id: 491, color: "red", disposition: "open" },
            { id: 492, color: "green", disposition: "closed" },
            { id: 493, color: "green", disposition: "closed" },
            { id: 494, color: "green", disposition: "closed" },
            { id: 495, color: "red", disposition: "closed" },
            { id: 496, color: "red", disposition: "closed" },
            { id: 497, color: "yellow", disposition: "closed" },
            { id: 498, color: "yellow", disposition: "closed" },
            { id: 499, color: "red", disposition: "closed" },
            { id: 500, color: "blue", disposition: "closed" }
        ];
        let maxPageNumber = Math.ceil(jsonData.length / 10);
        // console.log('Max PageNumber: ', (maxPageNumber));
        if(req.params.pageNumber > maxPageNumber){
            return res.json({message: `Page number should be from 1 to ${maxPageNumber}`});
        }
        let openDisposition = [];
        let closeDisposition = [];
        let ids = [];
        let startLimit = (parseInt(req.params.pageNumber) * 10) - 10;
        let endLimit = startLimit + 10;
        // console.log('Start Point: ',req.params.pageNumber * 10);
        for (let i = startLimit; i < endLimit; i++) {
            // console.log('Running');
            ids.push(jsonData[i].id)
            if (jsonData[i].disposition == 'open') {
                openDisposition.push(jsonData[i]);
            } else if (jsonData[i].disposition == 'closed' && jsonData[i].color =="red" || jsonData[i].color =="green" || jsonData[i].color =="blue"){
                closeDisposition.push(jsonData[i])
            }
            if ((i + 1) == endLimit) {
                res.json({ Ids: ids, Open: openDisposition, ClosedCount: closeDisposition.length, PreviousPage: req.params.pageNumber==1 ? null : (parseInt(req.params.pageNumber)-1)  , NextPage: req.params.pageNumber==maxPageNumber ? null : (parseInt(req.params.pageNumber)+1) })
            }
        }
    } else {
        return res.json({message: `Please provide an Positive Integer Page Number greater than 0.`});
    }
};