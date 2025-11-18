# typescriptassignment-1
typescript problem solving assignment


What are some differences between interfaces and types in TypeScript?

উত্তরঃ সাধারণত ইন্টারফেস এবং টাইপ দুটিই ডাটা শেইপ বুঝাতে ইউজ করা হয়, তবে এদের মধ্যে বেশ কিছু পার্থক্য আছে

ইন্টারফেসঃ 
- এটি অবজেক্টের কাঠামো এবং ক্লাসের কন্ট্রাক্ট বুঝাতে ব্যবহার করা হয়, যেই প্রোপার্টি গুলো একটি অবজেক্ট এ মাস্ট থাকতে হয় সেগুলো বুঝায় 
- একটি ইন্টারফেস অন্য ইন্টারফেস বা ক্লাসকে extends কীওয়ার্ড ব্যবহার করে এক্সটেন্ড করতে পারে। একাধিক ইন্টারফেসকে একসাথে এক্সটেন্ড করা যায়।
- একাধিক ইন্টারফেসকে মার্জ করা যায় 

টাইপসঃ 

- টাইপ শুধু অবজেক্ট নাহ যেকোনো ডেটা টাইপের জন্যই ব্যবহার হয় 
- এটি অন্য টাইপ বা ইন্টারফেসকে ইন্টারসেকশন (& অপারেটর) ব্যবহার করে সংযুক্ত করতে পারে
- এটিতে extends কীওয়ার্ড এর ব্যবহার নেই বরং & অপারেটর আছে 
- মার্জ করা যায়না 


What is the use of the keyof keyword in TypeScript? Provide an example.


keyof হলো টাইপস্ক্রিপ্টের এমন একটি অপারেটর, যা কোনো object এর type থেকে সবগুলাে property name বের করে একটি “union type” হিসেবে দেয়


keyof ব্যবহার করলেঃ 

ভুল key নাম লেখা আটকায়, ডাইনামিকভাবে কোনো property access করতে সাহায্য করে, ফাংশন লিখলে type-safe করে, বার বার key string লিখতে হয় না। 

উদাহরণঃ 

interface Person {
  name: string;
  age: number;
  income: number;
  isStudent: boolean;
}

type PersonKeys = keyof Person;
