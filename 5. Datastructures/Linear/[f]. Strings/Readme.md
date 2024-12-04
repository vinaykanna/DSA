# Strings

Strings are defined as a stream of characters. Strings are used to represent text and are generally represented by enclosing text within quotes as: *"This is a sample string!"*.

A String is seen anywhere and everywhere. Right from when you login onto your device, you enter a String, i.e. your password. When you come across any textual data, more often than not, it is composed of Strings.

In programming, a String is used as a datatype just like int or float might be used; however, the difference here is that, String deals with textual kind of data. It can consist of alphabets, numbers, spaces and special characters. Strings are often enclosed in double quotation marks(“This is a String”).

A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable. The latter may allow its elements to be mutated and the length changed, or it may be fixed (after creation).

A string is generally considered as a data type and is often implemented as an array data structure of bytes (or words) that stores a sequence of elements, typically characters, using some character encoding. *String* may also denote more general arrays or other sequence (or list) data types and structures.

Depending on the programming language and precise data type used, a variable declared to be a string may either cause storage in memory to be statically allocated for a predetermined maximum length or employ dynamic allocation to allow it to hold a variable number of elements.

### String Length

Although formal strings can have an arbitrary finite length, the length of strings in real languages is often constrained to an artificial maximum. In general, there are two types of string datatypes: *fixed-length strings*, which have a fixed maximum length to be determined at compile time and which use the same amount of memory whether this maximum is needed or not, and *variable-length strings*, whose length is not arbitrarily fixed and which can use varying amounts of memory depending on the actual requirements at run time (see Memory management). Most strings in modern programming languages are variable-length strings. Of course, even variable-length strings are limited in length – by the size of available computer memory. The string length can be stored as a separate integer (which may put another artificial limit on the length) or implicitly through a termination character, usually a character value with all bits zero such as in C programming language

### ****Character encoding****

Character encoding ****is the process of assigning numbers to graphical characters, especially the written characters of human language, allowing them to be stored,                         transmitted, and transformed using digital computers.

Common examples of character encoding systems include Morse code, the Baudot code, the American Standard Code for Information Interchange (ASCII) and Unicode. Unicode, a well defined and extensible encoding system, has supplanted most earlier character encodings

A *coded character set* is a character set in which each character corresponds to a unique number.

A *code point* of a coded character set is any allowed value in the character set or code space.

A *code space* is a range of integers whose values are code points.

A *code unit* is the "word size" of the character encoding scheme, such as 7-bit, 8-bit, 16-bit. In some schemes, some characters are encoded using multiple code units, resulting in a variable-length encoding. A code unit is referred to as a *code value* in some documents

The code unit size is equivalent to the bit measurement for the particular encoding:

- A code unit in US-ASCII consists of 7 bits;
- A code unit in UTF-8, EBCDIC and GB 18030 consists of 8 bits;
- A code unit in UTF-16 consists of 16 bits;
- A code unit in UTF-32 consists of 32 bits.