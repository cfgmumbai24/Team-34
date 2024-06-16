import 'package:flutter/material.dart';

appBar() {
  return AppBar(
    title: Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        Image.asset('assets/images/edumate_logo.png'),
        const SizedBox(width: 10),
        const Text("Eklavya"),
// const SizedBox(width: 80),
      ],
    ),
  );
}
