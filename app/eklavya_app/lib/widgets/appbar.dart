import 'package:flutter/material.dart';

Widget appBar(BuildContext context, Function(Locale) onLanguageChange) {
  return AppBar(
    title: Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        Image.asset('assets/images/edumate_logo.png'),
        const SizedBox(width: 10),
        const Text("Edumate"),
      ],
    ),
    actions: [
      PopupMenuButton<int>(
        itemBuilder: (context) => [
          const PopupMenuItem<int>(
            value: 1,
            child: Row(
              children: <Widget>[
                Icon(Icons.language),
                SizedBox(width: 10),
                Text("English"),
              ],
            ),
          ),
          const PopupMenuItem<int>(
            value: 2,
            child: Row(
              children: <Widget>[
                Icon(Icons.language),
                SizedBox(width: 10),
                Text("Nepali"),
              ],
            ),
          ),
        ],
        onSelected: (value) {
          if (value == 1) {
            onLanguageChange(const Locale("en"));
          } else if (value == 2) {
            onLanguageChange(const Locale("ne"));
          }
        },
      ),
    ],
  );
}
