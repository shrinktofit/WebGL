
/*
Copyright (c) 2019 The Khronos Group Inc.
Use of this source code is governed by an MIT-style license that can be
found in the LICENSE.txt file.
*/


#ifdef GL_ES
precision mediump float;
#endif
void main()
{
    int i;
    ++i++;  // ++i++ is equivalent to ++(i++) which fails because i++ is not an lvalue.  (++i)++; is legal.
}
