<template>
  <div>
    <footer class="footer">
      <div class="footer-left">
        <p>Author: leekus</p>
        <div class="contact">
          Email:
          <a href="mailto:leemulus21@gmail.com" style="color: white"
            >leemulus21@gmail.com</a
          >
        </div>
        <div class="framework">
          Github: https://github.com/chelizichen/TarsusFrameWork
        </div>
        <div class="framework">Phone: +86 13476973442</div>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <div class="footer-right">
        <div>
          <p style="margin:2px">MIT Open Source License</p>
          <p style="margin:2px">Copyright (C) 2023, chelizichen,TarsusFrameWork</p>
          <p style="margin:2px">All rights reserved.</p>
          <p
            style="
              font-size: 14px;
              margin-top: 3px;
              text-align: justify;
            font-family: none;
            "
          >
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions: The above copyright notice and
            this permission notice shall be included in all copies or
            substantial portions of the Software.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.footer {
  font-family: Arial, sans-serif;
  background-color: #1374e9;
  color: white;
  padding: 20px 0;
  display: flex;
}
.footer-left {
  text-align: right;
  width: 50%;
  padding: 20px;
}
.footer-right {
  text-align: left;
  width: 50%;
  padding: 20px;
}
.footer p {
  margin: 0;
}

.contact {
  margin-top: 10px;
  font-size: 14px;
}

.framework {
  margin-top: 10px;
  font-size: 14px;
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 20px;
}
</style>